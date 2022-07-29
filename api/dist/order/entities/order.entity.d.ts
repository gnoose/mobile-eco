import { SoftDelete } from '../../common/core/soft-delete';
import { OrderDto } from '../dtos/order.dto';
import { MobileModel, RepairType, OrderStatus } from '../../common/models/base';
export declare class OrderEntity extends SoftDelete {
    name: string;
    class: string;
    mobileModel: MobileModel;
    repairType: RepairType;
    deadline: Date;
    amount: number;
    status: OrderStatus;
    toDto(): OrderDto;
}
