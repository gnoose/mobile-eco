import { MobileModel, RepairType } from '../../common/models/base';
export declare class OrderRegisterDto {
    name: string;
    class: string;
    mobileModel: MobileModel;
    repairType: RepairType;
    deadline: Date;
}
