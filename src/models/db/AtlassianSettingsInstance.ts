import { Column, Model, Table, PrimaryKey, DataType, AutoIncrement } from 'sequelize-typescript';
import {Microsoft} from "../../types/microsoft";

@Table({
    tableName: 'atlassian_instance_settings',
    // timestamps: false,
    // indexes: [
    //     {
    //         unique: true,
    //         fields: ['key', 'productType', 'clientKey']
    //     },
    // ]
})
export class AtlassianSettingsInstance extends Model<AtlassianSettingsInstance> {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Column(DataType.INTEGER)
    instanceId: number;

    @Column
    key: string;

    @Column(DataType.JSONB)
    value: Microsoft.AtlassianSettingsValue;

}
