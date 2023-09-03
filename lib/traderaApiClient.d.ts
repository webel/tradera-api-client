import { PublicService } from "./PublicService/publicService";
import { SearchService } from "./SearchService/searchService";
export declare class TraderaApiClient {
    private readonly appId;
    private readonly appKey;
    private readonly publicServiceUrl;
    private readonly searchServiceUrl;
    readonly publicService: PublicService;
    readonly searchService: SearchService;
    constructor(appId: number, appKey: string);
    init(): Promise<void>;
    private wdsl;
    private serviceUrlWithAuth;
}
//# sourceMappingURL=traderaApiClient.d.ts.map