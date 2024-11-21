import { AtpAgent } from '@atproto/api';
import { Record as PostRecord } from '../lexicon/types/app/bsky/feed/post';
import { Record as ProfileRecord } from '../lexicon/types/app/bsky/actor/profile';
import { ProfileViewBasic, ProfileView, ProfileViewDetailed } from '../lexicon/types/app/bsky/actor/defs';
import { FeedViewPost, PostView } from '../lexicon/types/app/bsky/feed/defs';
import { Main as EmbedImages } from '../lexicon/types/app/bsky/embed/images';
import { Main as EmbedExternal } from '../lexicon/types/app/bsky/embed/external';
import { Main as EmbedRecord, View as EmbedRecordView } from '../lexicon/types/app/bsky/embed/record';
import { Main as EmbedRecordWithMedia } from '../lexicon/types/app/bsky/embed/recordWithMedia';
import { ActorStoreReader } from '../actor-store';
import { LocalRecords, RecordDescript } from './types';
import { AccountManager } from '../account-manager';
type CommonSignedUris = 'avatar' | 'banner' | 'feed_thumbnail' | 'feed_fullsize';
export type LocalViewerCreator = (actorStore: ActorStoreReader) => LocalViewer;
export declare class LocalViewer {
    did: string;
    actorStore: ActorStoreReader;
    accountManager: AccountManager;
    pdsHostname: string;
    appViewAgent?: AtpAgent;
    appviewDid?: string;
    appviewCdnUrlPattern?: string;
    constructor(params: {
        actorStore: ActorStoreReader;
        accountManager: AccountManager;
        pdsHostname: string;
        appViewAgent?: AtpAgent;
        appviewDid?: string;
        appviewCdnUrlPattern?: string;
    });
    static creator(params: {
        accountManager: AccountManager;
        pdsHostname: string;
        appViewAgent?: AtpAgent;
        appviewDid?: string;
        appviewCdnUrlPattern?: string;
    }): LocalViewerCreator;
    getImageUrl(pattern: CommonSignedUris, cid: string): string;
    serviceAuthHeaders(did: string, lxm: string): Promise<{
        headers: {
            authorization: string;
        };
    }>;
    getRecordsSinceRev(rev: string): Promise<LocalRecords>;
    getProfileBasic(): Promise<ProfileViewBasic | null>;
    formatAndInsertPostsInFeed(feed: FeedViewPost[], posts: RecordDescript<PostRecord>[]): Promise<FeedViewPost[]>;
    getPost(descript: RecordDescript<PostRecord>): Promise<PostView | null>;
    formatPostEmbed(did: string, post: PostRecord): Promise<EmbedRecordView | {
        $type: string;
        images: {
            thumb: string;
            fullsize: string;
            aspectRatio: import("../lexicon/types/app/bsky/embed/defs").AspectRatio | undefined;
            alt: string;
        }[];
        external?: undefined;
    } | {
        $type: string;
        external: {
            uri: string;
            title: string;
            description: string;
            thumb: string | undefined;
        };
        images?: undefined;
    } | {
        $type: string;
        record: EmbedRecordView;
        media: Promise<{
            $type: string;
            images: {
                thumb: string;
                fullsize: string;
                aspectRatio: import("../lexicon/types/app/bsky/embed/defs").AspectRatio | undefined;
                alt: string;
            }[];
            external?: undefined;
        } | {
            $type: string;
            external: {
                uri: string;
                title: string;
                description: string;
                thumb: string | undefined;
            };
            images?: undefined;
        }>;
    } | null>;
    formatSimpleEmbed(embed: EmbedImages | EmbedExternal): Promise<{
        $type: string;
        images: {
            thumb: string;
            fullsize: string;
            aspectRatio: import("../lexicon/types/app/bsky/embed/defs").AspectRatio | undefined;
            alt: string;
        }[];
        external?: undefined;
    } | {
        $type: string;
        external: {
            uri: string;
            title: string;
            description: string;
            thumb: string | undefined;
        };
        images?: undefined;
    }>;
    formatRecordEmbed(embed: EmbedRecord): Promise<EmbedRecordView>;
    private formatRecordEmbedInternal;
    formatRecordWithMediaEmbed(did: string, embed: EmbedRecordWithMedia): Promise<{
        $type: string;
        record: EmbedRecordView;
        media: Promise<{
            $type: string;
            images: {
                thumb: string;
                fullsize: string;
                aspectRatio: import("../lexicon/types/app/bsky/embed/defs").AspectRatio | undefined;
                alt: string;
            }[];
            external?: undefined;
        } | {
            $type: string;
            external: {
                uri: string;
                title: string;
                description: string;
                thumb: string | undefined;
            };
            images?: undefined;
        }>;
    } | null>;
    updateProfileViewBasic(view: ProfileViewBasic, record: ProfileRecord): ProfileViewBasic;
    updateProfileView(view: ProfileView, record: ProfileRecord): ProfileView;
    updateProfileDetailed(view: ProfileViewDetailed, record: ProfileRecord): ProfileViewDetailed;
}
export declare const getRecordsSinceRev: (actorStore: ActorStoreReader, rev: string) => Promise<LocalRecords>;
export {};
//# sourceMappingURL=viewer.d.ts.map