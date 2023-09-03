export class Service {
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
//# sourceMappingURL=service.js.map