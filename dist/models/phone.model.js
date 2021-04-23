"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phone = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Phone = class Phone extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Phone.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Phone.prototype, "name", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], Phone.prototype, "price", void 0);
Phone = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Phone);
exports.Phone = Phone;
//# sourceMappingURL=phone.model.js.map