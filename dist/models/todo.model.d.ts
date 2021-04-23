import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id?: number;
    title?: string;
    description?: string;
    completed: boolean;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
