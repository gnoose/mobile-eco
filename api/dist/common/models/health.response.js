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
exports.HealthResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class HealthResponse {
    constructor(status = true) {
        this.status = status;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The api server health status. Always true.' }),
    __metadata("design:type", Boolean)
], HealthResponse.prototype, "status", void 0);
exports.HealthResponse = HealthResponse;
//# sourceMappingURL=health.response.js.map