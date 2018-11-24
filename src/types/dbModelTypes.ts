import {Microsoft} from "./microsoft";

export interface IAtlassianSettingsInstance {
    id: number;
    instanceId: number;
    key: string;
    value: Microsoft.AtlassianSettingsValue;
}

export interface IIncidentChannelInstance {
    id?: number;
    instanceId: number;
    issueId: number;
    projectId: number;
    oid?: string;
    tenantId: string;
    teamId: string;
    serviceUrl: string;
    channelId: string;
    channelName: string;
    deleted?: boolean;
}
