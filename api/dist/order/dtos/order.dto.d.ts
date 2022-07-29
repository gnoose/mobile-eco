import { CommonDto } from '../../common/dtos/common.dto';
import { MobileModel, OrderStatus, RepairType } from '../../common/models/base';
export declare class OrderDto extends CommonDto {
    name: string;
    class: string;
    mobileModel: MobileModel;
    repairType: RepairType;
    deadline: Date;
    amount: number;
    status: OrderStatus;
}
