import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderRegisterDto } from './dtos/order-register.dto';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: Repository<OrderEntity>);
    addOrder(dto: OrderRegisterDto, throwErrors?: boolean): Promise<OrderEntity>;
    updateOrder(order: OrderEntity): Promise<OrderEntity>;
    count(): Promise<number>;
    find(): Promise<OrderEntity[]>;
    findById(id: string): Promise<OrderEntity>;
    removeById(id: string): Promise<boolean>;
}
