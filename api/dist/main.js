"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const body_parser_1 = require("body-parser");
const dotenv = require("dotenv");
const CloneBuffer = require("clone-buffer");
const expressBasicAuth = require("express-basic-auth");
const app_module_1 = require("./app.module");
async function bootstrap() {
    dotenv.config();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({
        origin: '*',
    });
    app.use((0, body_parser_1.json)({
        verify: (req, res, buf) => {
            if (req.headers['stripe-signature'] && Buffer.isBuffer(buf)) {
                req.rawBody = CloneBuffer(buf);
            }
            return true;
        },
    }));
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Mobile Eco System API')
        .setDescription('This API service is for Mobile Eco')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    app.use('/doc', expressBasicAuth({
        challenge: true,
        users: {
            mobile: 'mobile',
        },
    }));
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('doc', app, document);
    await app.listen(process.env.PORT || 3005);
}
bootstrap();
//# sourceMappingURL=main.js.map