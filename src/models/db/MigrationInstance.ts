import { Column, Model, Table, DataType, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: '_migrations',
    // timestamps: true,
    // indexes: [
    //     {
    //         unique: true,
    //         fields: ['key', 'productType', 'clientKey']
    //     },
    // ]
})
export class MigrationInstance extends Model<MigrationInstance> {

    @PrimaryKey
    @Column(DataType.STRING)
    name: string;

    @Column(DataType.DATE)
    time_of_migration: Date;
}
