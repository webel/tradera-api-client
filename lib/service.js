"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
class Service {
    setSoapClient(soapClient) {
        this.soapClient = soapClient;
    }
    async callApiMethod(method, resultName, query) {
        if (this.soapClient === undefined) {
            throw new Error("callApiMethod: soapClient undefined");
        }
        const response = await this.soapClient[`${method}Async`](query);
        return response[0][resultName];
    }
}
exports.Service = Service;
//# sourceMappingURL=service.js.map