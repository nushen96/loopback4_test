"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDsDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const dotenv = require('dotenv').config();
const config = {
    name: 'mongoDS',
    connector: 'mongodb',
    url: `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@nushencluster-shard-00-02.smstx.mongodb.net:27017,nushencluster-shard-00-01.smstx.mongodb.net:27017,nushencluster-shard-00-00.smstx.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true`,
    port: 27017,
    database: process.env.DB_NAME,
    useNewUrlParser: true,
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongoDsDataSource = class MongoDsDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoDsDataSource.dataSourceName = 'mongoDS';
MongoDsDataSource.defaultConfig = config;
MongoDsDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.mongoDS', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongoDsDataSource);
exports.MongoDsDataSource = MongoDsDataSource;
//# sourceMappingURL=mongo-ds.datasource.js.map