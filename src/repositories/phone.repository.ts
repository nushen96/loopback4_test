import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Phone, PhoneRelations} from '../models';

export class PhoneRepository extends DefaultCrudRepository<
  Phone,
  typeof Phone.prototype.id,
  PhoneRelations
> {
  constructor(
    @inject('datasources.mongoDS') dataSource: MongoDsDataSource,
  ) {
    super(Phone, dataSource);
  }
}
