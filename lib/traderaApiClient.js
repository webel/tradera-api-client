"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraderaApiClient = void 0;
const soap_1 = require("soap");
const publicService_1 = require("./PublicService/publicService");
const searchService_1 = require("./SearchService/searchService");
class TraderaApiClient {
    constructor(appId, appKey) {
        this.appId = appId;
        this.appKey = appKey;
        this.publicServiceUrl = "https://api.tradera.com/v3/publicservice.asmx";
        this.searchServiceUrl = "https://api.tradera.com/v3/searchservice.asmx";
        this.publicService = new publicService_1.PublicService();
        this.searchService = new searchService_1.SearchService();
    }
    async init() {
        this.publicService.setSoapClient(await (0, soap_1.createClientAsync)(this.wdsl(this.publicServiceUrl), undefined, this.serviceUrlWithAuth(this.publicServiceUrl)));
        this.searchService.setSoapClient(await (0, soap_1.createClientAsync)(this.wdsl(this.searchServiceUrl), undefined, this.serviceUrlWithAuth(this.searchServiceUrl)));
    }
    wdsl(serviceUrl) {
        return `${serviceUrl}?WSDL`;
    }
    serviceUrlWithAuth(serviceUrl) {
        const url = new URL(serviceUrl);
        url.searchParams.append("appId", this.appId.toString());
        url.searchParams.append("appKey", this.appKey);
        return url.toString();
    }
}
exports.TraderaApiClient = TraderaApiClient;
//# sourceMappingURL=traderaApiClient.js.map