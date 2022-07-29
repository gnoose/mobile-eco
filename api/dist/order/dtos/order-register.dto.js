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
exports.OrderRegisterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_1 = require("../../common/models/base");
class OrderRegisterDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "the order owner's name" }),
    __metadata("design:type", String)
], OrderRegisterDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "the order owner's class" }),
    __metadata("design:type", String)
], OrderRegisterDto.prototype, "class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the mobile model' }),
    __metadata("design:type", String)
], OrderRegisterDto.prototype, "mobileModel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the repair type' }),
    __metadata("design:type", String)
], OrderRegisterDto.prototype, "repairType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'the order deadline' }),
    __metadata("design:type", Date)
], OrderRegisterDto.prototype, "deadline", void 0);
exports.OrderRegisterDto = OrderRegisterDto;
//# sourceMappingURL=order-register.dto.js.map