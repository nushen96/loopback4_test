import { PhoneRepository, TodoRepository } from '../repositories';
export declare class GlobalController {
    protected todoRepository: TodoRepository;
    protected phoneRepository: PhoneRepository;
    constructor(todoRepository: TodoRepository, phoneRepository: PhoneRepository);
    getAllData(): Promise<{
        todos: (import("../models").Todo & import("../models").TodoRelations)[];
        phones: (import("../models").Phone & import("../models").PhoneRelations)[];
    }>;
}
