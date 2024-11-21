"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecordsSinceRev = exports.LocalViewer = void 0;
const util_1 = __importDefault(require("util"));
const cid_1 = require("multiformats/cid");
const syntax_1 = require("@atproto/syntax");
const repo_1 = require("@atproto/repo");
const xrpc_server_1 = require("@atproto/xrpc-server");
const lexicons_1 = require("../lexicon/lexicons");
const images_1 = require("../lexicon/types/app/bsky/embed/images");
const external_1 = require("../lexicon/types/app/bsky/embed/external");
const record_1 = require("../lexicon/types/app/bsky/embed/record");
const recordWithMedia_1 = require("../lexicon/types/app/bsky/embed/recordWithMedia");
class LocalViewer {
    constructor(params) {
        Object.defineProperty(this, "did", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "actorStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "accountManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pdsHostname", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "appViewAgent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "appviewDid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "appviewCdnUrlPattern", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.did = params.actorStore.did;
        this.actorStore = params.actorStore;
        this.accountManager = params.accountManager;
        this.pdsHostname = params.pdsHostname;
        this.appViewAgent = params.appViewAgent;
        this.appviewDid = params.appviewDid;
        this.appviewCdnUrlPattern = params.appviewCdnUrlPattern;
    }
    static creator(params) {
        return (actorStore) => {
            return new LocalViewer({ ...params, actorStore });
        };
    }
    getImageUrl(pattern, cid) {
        if (!this.appviewCdnUrlPattern) {
            return `https://${this.pdsHostname}/xrpc/${lexicons_1.ids.ComAtprotoSyncGetBlob}?did=${this.did}&cid=${cid}`;
        }
        return util_1.default.format(this.appviewCdnUrlPattern, pattern, this.did, cid);
    }
    async serviceAuthHeaders(did, lxm) {
        if (!this.appviewDid) {
            throw new Error('Could not find bsky appview did');
        }
        const keypair = await this.actorStore.keypair();
        return (0, xrpc_server_1.createServiceAuthHeaders)({
            iss: did,
            aud: this.appviewDid,
            lxm,
            keypair,
        });
    }
    async getRecordsSinceRev(rev) {
        return (0, exports.getRecordsSinceRev)(this.actorStore, rev);
    }
    async getProfileBasic() {
        const profileQuery = this.actorStore.db.db
            .selectFrom('record')
            .leftJoin('repo_block', 'repo_block.cid', 'record.cid')
            .where('record.collection', '=', lexicons_1.ids.AppBskyActorProfile)
            .where('record.rkey', '=', 'self')
            .selectAll();
        const [profileRes, accountRes] = await Promise.all([
            profileQuery.executeTakeFirst(),
            this.accountManager.getAccount(this.did),
        ]);
        if (!accountRes)
            return null;
        const record = profileRes?.content
            ? (0, repo_1.cborToLexRecord)(profileRes.content)
            : null;
        return {
            did: this.did,
            handle: accountRes.handle ?? syntax_1.INVALID_HANDLE,
            displayName: record?.displayName,
            avatar: record?.avatar
                ? this.getImageUrl('avatar', record.avatar.ref.toString())
                : undefined,
        };
    }
    async formatAndInsertPostsInFeed(feed, posts) {
        if (posts.length === 0) {
            return feed;
        }
        const lastTime = feed.at(-1)?.post.indexedAt ?? new Date(0).toISOString();
        const inFeed = posts.filter((p) => p.indexedAt > lastTime);
        const newestToOldest = inFeed.reverse();
        const maybeFormatted = await Promise.all(newestToOldest.map((p) => this.getPost(p)));
        const formatted = maybeFormatted.filter((p) => p !== null);
        for (const post of formatted) {
            const idx = feed.findIndex((fi) => fi.post.indexedAt < post.indexedAt);
            if (idx >= 0) {
                feed.splice(idx, 0, { post });
            }
            else {
                feed.push({ post });
            }
        }
        return feed;
    }
    async getPost(descript) {
        const { uri, cid, indexedAt, record } = descript;
        const author = await this.getProfileBasic();
        if (!author)
            return null;
        const embed = record.embed
            ? await this.formatPostEmbed(author.did, record)
            : undefined;
        return {
            uri: uri.toString(),
            cid: cid.toString(),
            likeCount: 0, // counts presumed to be 0 directly after post creation
            replyCount: 0,
            repostCount: 0,
            quoteCount: 0,
            author,
            record,
            embed: embed ?? undefined,
            indexedAt,
        };
    }
    async formatPostEmbed(did, post) {
        const embed = post.embed;
        if (!embed)
            return null;
        if ((0, images_1.isMain)(embed) || (0, external_1.isMain)(embed)) {
            return this.formatSimpleEmbed(embed);
        }
        else if ((0, record_1.isMain)(embed)) {
            return this.formatRecordEmbed(embed);
        }
        else if ((0, recordWithMedia_1.isMain)(embed)) {
            return this.formatRecordWithMediaEmbed(did, embed);
        }
        else {
            return null;
        }
    }
    async formatSimpleEmbed(embed) {
        if ((0, images_1.isMain)(embed)) {
            const images = embed.images.map((img) => ({
                thumb: this.getImageUrl('feed_thumbnail', img.image.ref.toString()),
                fullsize: this.getImageUrl('feed_fullsize', img.image.ref.toString()),
                aspectRatio: img.aspectRatio,
                alt: img.alt,
            }));
            return {
                $type: 'app.bsky.embed.images#view',
                images,
            };
        }
        else {
            const { uri, title, description, thumb } = embed.external;
            return {
                $type: 'app.bsky.embed.external#view',
                external: {
                    uri,
                    title,
                    description,
                    thumb: thumb
                        ? this.getImageUrl('feed_thumbnail', thumb.ref.toString())
                        : undefined,
                },
            };
        }
    }
    async formatRecordEmbed(embed) {
        const view = await this.formatRecordEmbedInternal(embed);
        return {
            $type: 'app.bsky.embed.record#view',
            record: view === null
                ? {
                    $type: 'app.bsky.embed.record#viewNotFound',
                    uri: embed.record.uri,
                }
                : view,
        };
    }
    async formatRecordEmbedInternal(embed) {
        if (!this.appViewAgent || !this.appviewDid) {
            return null;
        }
        const collection = new syntax_1.AtUri(embed.record.uri).collection;
        if (collection === lexicons_1.ids.AppBskyFeedPost) {
            const res = await this.appViewAgent.api.app.bsky.feed.getPosts({ uris: [embed.record.uri] }, await this.serviceAuthHeaders(this.did, lexicons_1.ids.AppBskyFeedGetPosts));
            const post = res.data.posts[0];
            if (!post)
                return null;
            return {
                $type: 'app.bsky.embed.record#viewRecord',
                uri: post.uri,
                cid: post.cid,
                author: post.author,
                value: post.record,
                labels: post.labels,
                embeds: post.embed ? [post.embed] : undefined,
                indexedAt: post.indexedAt,
            };
        }
        else if (collection === lexicons_1.ids.AppBskyFeedGenerator) {
            const res = await this.appViewAgent.api.app.bsky.feed.getFeedGenerator({ feed: embed.record.uri }, await this.serviceAuthHeaders(this.did, lexicons_1.ids.AppBskyFeedGetFeedGenerator));
            return {
                $type: 'app.bsky.feed.defs#generatorView',
                ...res.data.view,
            };
        }
        else if (collection === lexicons_1.ids.AppBskyGraphList) {
            const res = await this.appViewAgent.api.app.bsky.graph.getList({ list: embed.record.uri }, await this.serviceAuthHeaders(this.did, lexicons_1.ids.AppBskyGraphGetList));
            return {
                $type: 'app.bsky.graph.defs#listView',
                ...res.data.list,
            };
        }
        return null;
    }
    async formatRecordWithMediaEmbed(did, embed) {
        if (!(0, images_1.isMain)(embed.media) && !(0, external_1.isMain)(embed.media)) {
            return null;
        }
        const media = this.formatSimpleEmbed(embed.media);
        const record = await this.formatRecordEmbed(embed.record);
        return {
            $type: 'app.bsky.embed.recordWithMedia#view',
            record,
            media,
        };
    }
    updateProfileViewBasic(view, record) {
        return {
            ...view,
            displayName: record.displayName,
            avatar: record.avatar
                ? this.getImageUrl('avatar', record.avatar.ref.toString())
                : undefined,
        };
    }
    updateProfileView(view, record) {
        return {
            ...this.updateProfileViewBasic(view, record),
            description: record.description,
        };
    }
    updateProfileDetailed(view, record) {
        return {
            ...this.updateProfileView(view, record),
            banner: record.banner
                ? this.getImageUrl('banner', record.banner.ref.toString())
                : undefined,
        };
    }
}
exports.LocalViewer = LocalViewer;
const getRecordsSinceRev = async (actorStore, rev) => {
    const res = await actorStore.db.db
        .selectFrom('record')
        .innerJoin('repo_block', 'repo_block.cid', 'record.cid')
        .select(['repo_block.content', 'uri', 'repo_block.cid', 'record.indexedAt'])
        .where('record.repoRev', '>', rev)
        .limit(10)
        .orderBy('record.repoRev', 'asc')
        .execute();
    // sanity check to ensure that the clock received is not before _all_ local records (for instance in case of account migration)
    if (res.length > 0) {
        const sanityCheckRes = await actorStore.db.db
            .selectFrom('record')
            .selectAll()
            .where('record.repoRev', '<=', rev)
            .limit(1)
            .executeTakeFirst();
        if (!sanityCheckRes) {
            return { count: 0, profile: null, posts: [] };
        }
    }
    return res.reduce((acc, cur) => {
        const descript = {
            uri: new syntax_1.AtUri(cur.uri),
            cid: cid_1.CID.parse(cur.cid),
            indexedAt: cur.indexedAt,
            record: (0, repo_1.cborToLexRecord)(cur.content),
        };
        if (descript.uri.collection === lexicons_1.ids.AppBskyActorProfile &&
            descript.uri.rkey === 'self') {
            acc.profile = descript;
        }
        else if (descript.uri.collection === lexicons_1.ids.AppBskyFeedPost) {
            acc.posts.push(descript);
        }
        acc.count++;
        return acc;
    }, { count: 0, profile: null, posts: [] });
};
exports.getRecordsSinceRev = getRecordsSinceRev;
//# sourceMappingURL=viewer.js.map