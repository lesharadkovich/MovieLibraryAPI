import {Column, Model, Table, PrimaryKey, AutoIncrement, DataType} from 'sequelize-typescript';

@Table({
    tableName: 'atlassian_instance',
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['id', 'key', 'productType', 'clientKey']
        },
    ]
})
export class AtlassianInstance extends Model<AtlassianInstance> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    key: string;

    @Column
    cloudId: string;

    @Column
    clientKey: string;

    @Column
    publicKey: string;

    @Column
    sharedSecret: string;

    @Column
    serverVersion: string;

    @Column
    pluginsVersion: string;

    @Column
    baseUrl: string;

    @Column
    productType: string;

    @Column
    description: string;

    @Column
    eventType: string;

    @Column
    userKey: string;

    @Column
    serviceEntitlementNumber: string;

    @Column
    oauthClientId: string;

    @Column(DataType.DATE)
    createdAt: Date;

    @Column(DataType.DATE)
    updatedAt: Date;
}
