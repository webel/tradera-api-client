import { array, boolean, keyof, number, string, type } from "io-ts";
import { date } from "io-ts-types";
import { undefinable } from "../checkTypes";
import { Service } from "../service";
export class SearchService extends Service {
    async SearchAdvanced(request) {
        const result = await this.callApiMethod("SearchAdvanced", "SearchAdvancedResult", request);
        return result;
    }
}
const searchAdvancedResultCodec = type({
    Errors: undefinable(array(type({
        Code: string,
        Message: string,
    }))),
    Items: array(type({
        CategoryId: number,
        EndDate: date,
        HasBids: boolean,
        Id: number,
        IsEnded: boolean,
        ItemType: keyof({
            Auction: null,
            AuctionWithBuyItNow: null,
            PureBuyItNow: null,
            ShopItem: null,
        }),
        MaxBid: number,
        NextBid: number,
        SellerAlias: string,
        SellerDsrAverage: number,
        SellerId: number,
        ShortDescription: string,
        ThumbnailLink: string,
    })),
    TotalNumberOfItems: number,
    TotalNumberOfPages: number,
});
//# sourceMappingURL=searchService.js.map