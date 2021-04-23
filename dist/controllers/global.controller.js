"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const repositories_1 = require("../repositories");
// import {inject} from '@loopback/core';
let GlobalController = class GlobalController {
    constructor(todoRepository, phoneRepository) {
        this.todoRepository = todoRepository;
        this.phoneRepository = phoneRepository;
    }
    async getAllData() {
        const todos = await this.todoRepository.find();
        const phones = await this.phoneRepository.find();
        return { todos, phones };
    }
};
tslib_1.__decorate([
    rest_1.get('/data'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], GlobalController.prototype, "getAllData", null);
GlobalController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.TodoRepository)),
    tslib_1.__param(1, repository_1.repository(repositories_1.PhoneRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.TodoRepository,
        repositories_1.PhoneRepository])
], GlobalController);
exports.GlobalController = GlobalController;
//# sourceMappingURL=global.controller.js.map