import {ISequelizeConfig, Sequelize} from "sequelize-typescript";

let dbConfig: ISequelizeConfig = {
    "database": "db6nvqnphrcdjh",
    "dialect": "postgres",
    "username": "rkpehmbsgraqpn",
    "password": "6c4758d6070eadffea55da3c6b55fcdc560b22d0a893c8cf9dcfa2e786ec384b",
    "host": "ec2-54-75-231-3.eu-west-1.compute.amazonaws.com",
    "port": 5432,
    "operatorsAliases": false,
    "dialectOptions": {
        ssl: true
    }
};
dbConfig.modelPaths = [__dirname + '/models/db'];
const sequelize: Sequelize = new Sequelize(dbConfig);



(async () => {
    try {
        await applyMigrations();
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();

async function applyMigrations(): Promise<void> {
    await sequelize.query(`CREATE TABLE movies (
        id SERIAL PRIMARY KEY,
        name text,
        director text,
        description text,
        imageUrl text
    );`);

    process.exit(0);
}
