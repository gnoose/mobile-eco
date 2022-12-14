"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEntity = void 0;
const typeorm_1 = require("typeorm");
const soft_delete_1 = require("../../common/core/soft-delete");
const base_1 = require("../../common/models/base");
let OrderEntity = class OrderEntity extends soft_delete_1.SoftDelete {
    toDto() {
        return Object.assign(Object.assign({}, super.toDto()), { name: this.name, class: this.class, mobileModel: this.mobileModel, repairType: this.repairType, deadline: this.deadline, amount: this.amount, status: this.status });
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "mobileModel", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderEntity.prototype, "repairType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], OrderEntity.prototype, "deadline", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0,
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: base_1.OrderStatus,
        default: base_1.OrderStatus.initial,
    }),
    __metadata("design:type", Number)
], OrderEntity.prototype, "status", void 0);
OrderEntity = __decorate([
    (0, typeorm_1.Entity)('order')
], OrderEntity);
exports.OrderEntity = OrderEntity;
//# sourceMappingURL=order.entity.js.map