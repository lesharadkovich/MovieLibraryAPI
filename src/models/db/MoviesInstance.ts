import {Column, Model, Table, PrimaryKey, AutoIncrement} from 'sequelize-typescript';


@Table({
    tableName: 'movies',
    // timestamps: true,
    // indexes: [
    //     {
    //         unique: true,
    //         fields: ['id', 'key', 'productType', 'clientKey']
    //     },
    // ]
})
export class MoviesInstance extends Model<MoviesInstance> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    director: string;

    @Column
    description: string;

    @Column
    imageUrl: string;
}
