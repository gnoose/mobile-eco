import { AppService } from './app.service';
import { HealthResponse } from './common/models/health.response';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    health(): HealthResponse;
}
