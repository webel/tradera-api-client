"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const io_ts_1 = require("io-ts");
const io_ts_types_1 = require("io-ts-types");
const checkTypes_1 = require("../checkTypes");
const service_1 = require("../service");
class SearchService extends service_1.Service {
    async SearchAdvanced(request) {
        const result = await this.callApiMethod("SearchAdvanced", "SearchAdvancedResult", request);
        return result;
    }
}
exports.SearchService = SearchService;
const searchAdvancedResultCodec = (0, io_ts_1.type)({
    Errors: (0, checkTypes_1.undefinable)((0, io_ts_1.array)((0, io_ts_1.type)({
        Code: io_ts_1.string,
        Message: io_ts_1.string,
    }))),
    Items: (0, io_ts_1.array)((0, io_ts_1.type)({
        CategoryId: io_ts_1.number,
        EndDate: io_ts_types_1.date,
        HasBids: io_ts_1.boolean,
        Id: io_ts_1.number,
        IsEnded: io_ts_1.boolean,
        ItemType: (0, io_ts_1.keyof)({
            Auction: null,
            AuctionWithBuyItNow: null,
            PureBuyItNow: null,
            ShopItem: null,
        }),
        MaxBid: io_ts_1.number,
        NextBid: io_ts_1.number,
        SellerAlias: io_ts_1.string,
        SellerDsrAverage: io_ts_1.number,
        SellerId: io_ts_1.number,
        ShortDescription: io_ts_1.string,
        ThumbnailLink: io_ts_1.string,
    })),
    TotalNumberOfItems: io_ts_1.number,
    TotalNumberOfPages: io_ts_1.number,
});
//# sourceMappingURL=searchService.js.map