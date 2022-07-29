import { OrderDto } from './dtos/order.dto';
import { OrderService } from './order.service';
import { OrderRegisterDto } from './dtos/order-register.dto';
import { OrderAmountUpdateDto } from './dtos/order-amount-update.dto';
import { OrderStatusUpdateDto } from './dtos/order-status-update.dto';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    getOrderList(req: any): Promise<OrderDto[]>;
    addOrder(req: any, dto: OrderRegisterDto): Promise<OrderDto>;
    updateOrderAmount(req: any, dto: OrderAmountUpdateDto): Promise<OrderDto>;
    updateOrderStatus(req: any, dto: OrderStatusUpdateDto): Promise<OrderDto>;
}
