"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let dbConfig = {
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
const sequelize = new sequelize_typescript_1.Sequelize(dbConfig);
(() => __awaiter(this, void 0, void 0, function* () {
    try {
        yield applyMigrations();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}))();
function applyMigrations() {
    return __awaiter(this, void 0, void 0, function* () {
        yield sequelize.query(`CREATE TABLE movies (
        id SERIAL PRIMARY KEY,
        name text,
        director text,
        description text,
        imageUrl text
    );`);
        process.exit(0);
    });
}
//# sourceMappingURL=migrate.js.map