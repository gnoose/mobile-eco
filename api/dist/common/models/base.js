"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepairType = exports.MobileModel = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["initial"] = 0] = "initial";
    OrderStatus[OrderStatus["estimated"] = 1] = "estimated";
    OrderStatus[OrderStatus["agreed"] = 2] = "agreed";
    OrderStatus[OrderStatus["repaired"] = 3] = "repaired";
    OrderStatus[OrderStatus["ended"] = 4] = "ended";
    OrderStatus[OrderStatus["canceled"] = 5] = "canceled";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var MobileModel;
(function (MobileModel) {
    MobileModel["iphone"] = "iphone";
    MobileModel["samsumg"] = "samsung";
    MobileModel["mac"] = "mac";
    MobileModel["huwai"] = "huwai";
})(MobileModel = exports.MobileModel || (exports.MobileModel = {}));
var RepairType;
(function (RepairType) {
    RepairType["line"] = "line";
    RepairType["liquid"] = "liquid";
    RepairType["speaker"] = "speaker";
    RepairType["camera"] = "camera";
})(RepairType = exports.RepairType || (exports.RepairType = {}));
//# sourceMappingURL=base.js.map