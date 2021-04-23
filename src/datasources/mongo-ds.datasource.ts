import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
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
@lifeCycleObserver('datasource')
export class MongoDsDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
