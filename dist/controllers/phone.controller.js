"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PhoneController = class PhoneController {
    constructor(phoneRepository) {
        this.phoneRepository = phoneRepository;
    }
    async create(phone) {
        return this.phoneRepository.create(phone);
    }
    async count(where) {
        return this.phoneRepository.count(where);
    }
    async find(filter) {
        return this.phoneRepository.find(filter);
    }
    async updateAll(phone, where) {
        return this.phoneRepository.updateAll(phone, where);
    }
    async findById(id, filter) {
        return this.phoneRepository.findById(id, filter);
    }
    async updateById(id, phone) {
        await this.phoneRepository.updateById(id, phone);
    }
    async replaceById(id, phone) {
        await this.phoneRepository.replaceById(id, phone);
    }
    async deleteById(id) {
        await this.phoneRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/phones'),
    rest_1.response(200, {
        description: 'Phone model instance',
        content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Phone) } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Phone, {
                    title: 'NewPhone',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/phones/count'),
    rest_1.response(200, {
        description: 'Phone model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Phone)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/phones'),
    rest_1.response(200, {
        description: 'Array of Phone model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: rest_1.getModelSchemaRef(models_1.Phone, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Phone)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/phones'),
    rest_1.response(200, {
        description: 'Phone PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Phone, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Phone)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Phone, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/phones/{id}'),
    rest_1.response(200, {
        description: 'Phone model instance',
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Phone, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Phone, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/phones/{id}'),
    rest_1.response(204, {
        description: 'Phone PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Phone, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Phone]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/phones/{id}'),
    rest_1.response(204, {
        description: 'Phone PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Phone]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/phones/{id}'),
    rest_1.response(204, {
        description: 'Phone DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], PhoneController.prototype, "deleteById", null);
PhoneController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.PhoneRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PhoneRepository])
], PhoneController);
exports.PhoneController = PhoneController;
//# sourceMappingURL=phone.controller.js.map