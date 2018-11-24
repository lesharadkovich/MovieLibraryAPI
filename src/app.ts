//Bootstrap some runtime behavior
import 'module-alias/register';
import "reflect-metadata";

import {useExpressServer, useContainer} from "routing-controllers";
// import { Sequelize, ISequelizeConfig } from 'sequelize-typescript';
// import * as config from "config";
// import * as path from 'path';
import {Container} from "typedi";
// import { AppConfig } from './config/config';
// import {CustomErrorHandler} from "./middlewares/ErrorHandlingMiddleware"

import express = require("express");
import bodyParser = require("body-parser");



// Set up a container for DI
useContainer(Container);

// Hook up database connection
// let dbConfig: ISequelizeConfig = config.get(AppConfig.Database);
// dbConfig.modelPaths = [__dirname + '/models/db'];
// dbConfig.operatorsAliases = false;
// new Sequelize(dbConfig);



const app = express();
app.use(bodyParser.json());

// Create expressJS server routes based on controllers
useExpressServer(app, {
    controllers: [__dirname + "/controllers/*.js"],
    // middlewares: [CustomErrorHandler],
    // defaultErrorHandler: false,
    cors: true,
});


app.listen(process.env.PORT || 3000);
console.log('Server up and running');
