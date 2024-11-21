import { Transporter } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ServerConfig } from '../config';
export declare class ServerMailer {
    readonly transporter: Transporter<SMTPTransport.SentMessageInfo>;
    private readonly config;
    constructor(transporter: Transporter<SMTPTransport.SentMessageInfo>, config: ServerConfig);
    static getEmailConfig(_config: ServerConfig): {};
    sendResetPassword(params: {
        handle: string;
        token: string;
    }, mailOpts: Mail.Options): Promise<SMTPTransport.SentMessageInfo>;
    sendAccountDelete(params: {
        token: string;
    }, mailOpts: Mail.Options): Promise<SMTPTransport.SentMessageInfo>;
    sendConfirmEmail(params: {
        token: string;
    }, mailOpts: Mail.Options): Promise<SMTPTransport.SentMessageInfo>;
    sendUpdateEmail(params: {
        token: string;
    }, mailOpts: Mail.Options): Promise<SMTPTransport.SentMessageInfo>;
    sendPlcOperation(params: {
        token: string;
    }, mailOpts: Mail.Options): Promise<SMTPTransport.SentMessageInfo>;
    private sendTemplate;
}
//# sourceMappingURL=index.d.ts.map