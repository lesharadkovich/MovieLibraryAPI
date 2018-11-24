"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Bootstrap some runtime behavior
require("module-alias/register");
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const sequelize_typescript_1 = require("sequelize-typescript");
// import * as config from "config";
// import * as path from 'path';
const typedi_1 = require("typedi");
// import { AppConfig } from './config/config';
// import {CustomErrorHandler} from "./middlewares/ErrorHandlingMiddleware"
const express = require("express");
const bodyParser = require("body-parser");
// Set up a container for DI
routing_controllers_1.useContainer(typedi_1.Container);
// Hook up database connection
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
new sequelize_typescript_1.Sequelize(dbConfig);
const app = express();
app.use(bodyParser.json());
// Create expressJS server routes based on controllers
routing_controllers_1.useExpressServer(app, {
    controllers: [__dirname + "/controllers/*.js"],
    // middlewares: [CustomErrorHandler],
    // defaultErrorHandler: false,
    cors: true,
});
app.listen(process.env.PORT || 3000);
console.log('Server up and running');
//# sourceMappingURL=app.js.map