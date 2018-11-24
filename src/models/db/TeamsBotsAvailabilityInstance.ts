import {Column, Model, Table, PrimaryKey, DataType, AutoIncrement, Default} from 'sequelize-typescript';

@Table({
    tableName: 'teams_bots_availability',
})
export class TeamsBotsAvailabilityInstance extends Model<TeamsBotsAvailabilityInstance> {

    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @Column
    tenantId: string;

    @Column
    teamSkypeId: string;

    @Default(false)
    @Column
    available: boolean;

    @Column
    serviceUrl: string
}
