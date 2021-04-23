import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class MongoDsDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        url: string;
        port: number;
        database: string | undefined;
        useNewUrlParser: boolean;
    };
    constructor(dsConfig?: object);
}
