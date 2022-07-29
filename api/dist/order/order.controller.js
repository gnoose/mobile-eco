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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_dto_1 = require("./dtos/order.dto");
const order_service_1 = require("./order.service");
const order_register_dto_1 = require("./dtos/order-register.dto");
const order_amount_update_dto_1 = require("./dtos/order-amount-update.dto");
const order_status_update_dto_1 = require("./dtos/order-status-update.dto");
const base_1 = require("../common/models/base");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async getOrderList(req) {
        const orderList = await this.orderService.find();
        return orderList.map((item) => item.toDto());
    }
    async addOrder(req, dto) {
        return this.orderService.addOrder(dto);
    }
    async updateOrderAmount(req, dto) {
        const order = await this.orderService.findById(dto.id);
        if (!order) {
            throw new common_1.NotFoundException('order not found');
        }
        order.amount = dto.amount;
        order.status = base_1.OrderStatus.estimated;
        return this.orderService.updateOrder(order);
    }
    async updateOrderStatus(req, dto) {
        const order = await this.orderService.findById(dto.id);
        if (!order) {
            throw new common_1.NotFoundException('order not found');
        }
        order.status = dto.status;
        return this.orderService.updateOrder(order);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Return all orders' }),
    (0, swagger_1.ApiOkResponse)({ type: (Array) }),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderList", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Add new order' }),
    (0, swagger_1.ApiOkResponse)({ type: order_dto_1.OrderDto }),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_register_dto_1.OrderRegisterDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addOrder", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Order Amount' }),
    (0, swagger_1.ApiOkResponse)({ type: order_dto_1.OrderDto }),
    (0, common_1.Put)('amount'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_amount_update_dto_1.OrderAmountUpdateDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderAmount", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Order Status' }),
    (0, swagger_1.ApiOkResponse)({ type: order_dto_1.OrderDto }),
    (0, common_1.Put)('status'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, order_status_update_dto_1.OrderStatusUpdateDto]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrderStatus", null);
OrderController = __decorate([
    (0, swagger_1.ApiTags)('Order'),
    (0, common_1.Controller)('api/v0/order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map