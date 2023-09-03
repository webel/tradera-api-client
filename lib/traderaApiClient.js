import { createClientAsync } from "soap";
import { PublicService } from "./PublicService/publicService";
import { SearchService } from "./SearchService/searchService";
export class TraderaApiClient {
    constructor(appId, appKey) {
        this.appId = appId;
        this.appKey = appKey;
        this.publicServiceUrl = "https://api.tradera.com/v3/publicservice.asmx";
        this.searchServiceUrl = "https://api.tradera.com/v3/searchservice.asmx";
        this.publicService = new PublicService();
        this.searchService = new SearchService();
    }
    async init() {
        this.publicService.setSoapClient(await createClientAsync(this.wdsl(this.publicServiceUrl), undefined, this.serviceUrlWithAuth(this.publicServiceUrl)));
        this.searchService.setSoapClient(await createClientAsync(this.wdsl(this.searchServiceUrl), undefined, this.serviceUrlWithAuth(this.searchServiceUrl)));
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
//# sourceMappingURL=traderaApiClient.js.map