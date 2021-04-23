import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDsDataSource } from '../datasources';
import { Phone, PhoneRelations } from '../models';
export declare class PhoneRepository extends DefaultCrudRepository<Phone, typeof Phone.prototype.id, PhoneRelations> {
    constructor(dataSource: MongoDsDataSource);
}
