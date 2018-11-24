import {Sequelize} from "sequelize-typescript";

export interface IMigrationConfig {
    name: string,
    up(dbInstance: Sequelize): void
}