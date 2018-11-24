export namespace Atlassian {
    export interface _User {
        id: string;
        userName: string;
        nickName: string;
        active: boolean;
        name: any;
        displayName: string;
        emails: UserEmail[];
        meta: any;
        title: string;
        timezone: string;
        photos: UserPhoto[];
    }

    export interface UserEmail {
        value: string;
        type?: string;
        primary: boolean;
    }

    export interface UserPhoto {
        primary: boolean;
        value: string;
    }

    interface UserAvatarsUrls {
        '48x48': string;
        '24x24': string;
        '16x16': string;
        '32x32': string;
    }

    export interface LifecycleData {
        key: string;
        clientKey: string;
        publicKey: string;
        sharedSecret: string;
        serverVersion: string;
        pluginsVersion: string;
        baseUrl: string;
        productType: string;
        description: string;
        eventType: string;
        serviceEntitlementNumber: string;
        oauthClientId: string;
    }

    export interface Project {
        assigneeType: string;
        avatarUrls: UserAvatarsUrls;
        id: number;
        key: string;
        name: string;
        projectLead: {
            accountId: string;
            displayName: string;
            emailAddress: string;
            key: string;
            name: string;
            self: string;
        };
        self: string;
    }

    export interface User {
        self: string;
        key: string;
        name: string;
        emailAddress: string;
        avatarUrls: UserAvatarsUrls;
        displayName: string;
        active: boolean;
        timeZone: string;
        locale: string;
        group: any;
        applicationRoles: any;
        expand: string;
        [propName: string]: any;
    }

    export interface Comment {
        id: string;
        self: string;
        author: User;
        updateAuthor: User;
        body: string;
        created: Date;
        updated: Date;
        [propName: string]: any;
    }

    export interface Issue {
        id: number;
        self: string;
        key: string;
        fields: {
            summary?: string;
            issueType?: any;
            project?: any;
            assignee?: any;
            priority?: any;
            status?: any;
            [propName: string]: any;
        };
        [propName: string]: any;
    }

    interface ChangeLog {
        id: number;
        items: ChangeLogItem[];
    }

    interface ChangeLogItem {
        toString: string;
        to: string;
        fromString: string;
        from: string;
        fieldtype: string;
        field: string;
    }

    interface WebhookEvent {
        timestamp: number;
        webhookEvent: string;
        [propName: string]: any;
    }

    export interface CommentEvent extends WebhookEvent {
        comment: Comment;
        issue: Issue;
    }

    export interface IssueEvent extends WebhookEvent {
        user: User;
        issue: Issue;
        comment?: Comment;
        changelog?: ChangeLog;
    }

    export interface ProjectEvent extends WebhookEvent {
        project: Project
    }
}
