import {Column, Model, Table, PrimaryKey, DataType, AutoIncrement, Default} from 'sequelize-typescript';

@Table({
    tableName: 'jira_incident_channel_assignment',
    // timestamps: false,
    // indexes: [
    //     {
    //         unique: true,
    //         fields: ['key', 'productType', 'clientKey']
    //     },
    // ]
})
export class IncidentChannelInstance extends Model<IncidentChannelInstance> {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.INTEGER)
    instanceId: number;

    @Column
    issueId: number;

    @Column
    projectId: number;

    @Column
    oid: string;

    @Column
    tenantId: string;

    @Column
    teamId: string;

    @Column
    channelId: string;

    @Column
    channelName: string;

    @Column
    serviceUrl: string;

    @Default(false)
    @Column
    deleted: boolean;

}
