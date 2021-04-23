// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {get} from '@loopback/rest';
import {PhoneRepository, TodoRepository} from '../repositories';

// import {inject} from '@loopback/core';

export class GlobalController {
  constructor(
    @repository(TodoRepository) protected todoRepository: TodoRepository,
    @repository(PhoneRepository) protected phoneRepository: PhoneRepository,
  ) {}

  @get('/data')
  async getAllData() {
    const todos = await this.todoRepository.find();
    const phones = await this.phoneRepository.find();
    return {todos, phones};
  }
}
