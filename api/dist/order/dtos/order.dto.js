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
exports.OrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_dto_1 = require("../../common/dtos/common.dto");
const base_1 = require("../../common/models/base");
class OrderDto extends common_dto_1.CommonDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "the order owner's name" }),
    __metadata("design:type", String)
], OrderDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "the order owner's class" }),
    __metadata("design:type", String)
], OrderDto.prototype, "class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the mobile model' }),
    __metadata("design:type", String)
], OrderDto.prototype, "mobileModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the repair type' }),
    __metadata("design:type", String)
], OrderDto.prototype, "repairType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the order deadline' }),
    __metadata("design:type", Date)
], OrderDto.prototype, "deadline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the order amount' }),
    __metadata("design:type", Number)
], OrderDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the order status' }),
    __metadata("design:type", Number)
], OrderDto.prototype, "status", void 0);
exports.OrderDto = OrderDto;
//# sourceMappingURL=order.dto.js.map