import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Phone } from '../models';
import { PhoneRepository } from '../repositories';
export declare class PhoneController {
    phoneRepository: PhoneRepository;
    constructor(phoneRepository: PhoneRepository);
    create(phone: Omit<Phone, 'id'>): Promise<Phone>;
    count(where?: Where<Phone>): Promise<Count>;
    find(filter?: Filter<Phone>): Promise<Phone[]>;
    updateAll(phone: Phone, where?: Where<Phone>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Phone>): Promise<Phone>;
    updateById(id: string, phone: Phone): Promise<void>;
    replaceById(id: string, phone: Phone): Promise<void>;
    deleteById(id: string): Promise<void>;
}
