export namespace Microsoft {
    export interface TokenSuccess {
        token_type: string;
        expires_in: number;
        access_token: string;
        [propName: string]: any;
    }

    export interface TokenError {
        error: string;
        error_description: string;
        error_codes: number[];
        timestamp: string;
        trace_id: string;
        correlation_id: string;
        [propName: string]: any;
    }

    export interface SelectedTeamData {
        instanceId: number;
        teamId: string;
        teamName: string;
        teamSkypeId?: string;
    }

    export interface AtlassianSettingsValue {
        teamId: string;
        tenantId: string;
        teamName: string;
        botAdded: boolean;
        teamSkypeId: string;
        serviceUrl: string;
    }

    export interface ChannelData {
        displayName: string;
        description: string;
    }

    export interface CreateChannelRequest {
        displayName: string;
        description: string;
        issueId: number;
        projectId: number;
    }

    export interface CreateChannelResponse {
        title: string;
        message: string;
        channelUrl: string;
        channelName: string;
        channelId: string;
        tenantId: string;
        serviceUrl: string;
    }

    export interface MessageFromBot {
        userName: string;
        channelId: string;
        tenantId: string;
        teamId: string;
        messageText: string;
        messageId: string;
        timestamp: string;
    }
}
