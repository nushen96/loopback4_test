import {Entity, model, property} from '@loopback/repository';

@model()
export class Phone extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
  })
  price?: number;


  constructor(data?: Partial<Phone>) {
    super(data);
  }
}

export interface PhoneRelations {
  // describe navigational properties here
}

export type PhoneWithRelations = Phone & PhoneRelations;
