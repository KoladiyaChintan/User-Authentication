"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swagger = void 0;
const swagger_1 = require("@nestjs/swagger");
async function swagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Auth APIs')
        .setDescription('')
        .setVersion('1.0')
        .addBearerAuth({ type: 'apiKey', name: 'x-access-token', in: 'header' })
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options, {
        include: [],
        deepScanRoutes: true,
    });
    swagger_1.SwaggerModule.setup('auth', app, document, {
        customSiteTitle: 'Auth APIs',
        explorer: false,
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
}
exports.swagger = swagger;
//# sourceMappingURL=swagger.js.map