import { Entity } from '@loopback/repository';
export declare class Phone extends Entity {
    id?: string;
    name?: string;
    price?: number;
    constructor(data?: Partial<Phone>);
}
export interface PhoneRelations {
}
export declare type PhoneWithRelations = Phone & PhoneRelations;
