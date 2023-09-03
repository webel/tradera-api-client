"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicService = void 0;
const io_ts_1 = require("io-ts");
const io_ts_types_1 = require("io-ts-types");
const checkTypes_1 = require("../checkTypes");
const service_1 = require("../service");
class PublicService extends service_1.Service {
    async GetCategories() {
        const result = await this.callApiMethod("GetCategories", "GetCategoriesResult");
        return result;
    }
    async GetItem(request) {
        const result = await this.callApiMethod("GetItem", "GetItemResult", request);
        return (0, checkTypes_1.checkTypes)(result, getItemResultCodec);
    }
    async GetOfficalTime() {
        return this.callApiMethod("GetOfficalTime", "GetOfficalTimeResult");
    }
    async GetSearchResultAdvanced(filter) {
        return this.callApiMethod("GetSearchResultAdvanced", "GetSearchResultAdvancedResult", filter);
    }
    async GetSellerItems(request) {
        const result = await this.callApiMethod("GetSellerItems", "GetSellerItemsResult", request);
        return (0, checkTypes_1.checkTypes)(result, getSellerItemsResultCodec);
    }
    async GetUserByAlias(request) {
        const result = await this.callApiMethod("GetUserByAlias", "GetUserByAliasResult", request);
        return result;
    }
}
exports.PublicService = PublicService;
const getItemResultCodec = (0, io_ts_1.type)({
    AcceptedBuyerId: io_ts_1.number,
    AcceptsPickup: io_ts_1.boolean,
    Bold: io_ts_1.boolean,
    BuyItNowPrice: (0, checkTypes_1.undefinable)(io_ts_1.number),
    Buyers: (0, io_ts_1.array)((0, io_ts_1.type)({
        Id: io_ts_1.number,
        Alias: io_ts_1.string,
        TotalRating: io_ts_1.number,
    })),
    CategoryId: io_ts_1.number,
    EndDate: io_ts_types_1.date,
    FeaturedItem: io_ts_1.boolean,
    Highlight: io_ts_1.boolean,
    Id: io_ts_1.number,
    ImageLinks: (0, io_ts_1.type)({
        string: (0, io_ts_1.array)(io_ts_1.string),
    }),
    ItemAttributes: (0, io_ts_1.type)({
        int: (0, io_ts_1.array)(io_ts_1.number),
    }),
    ItemLink: io_ts_1.string,
    ItemType: (0, io_ts_1.keyof)({
        Auction: null,
        PureBuyItNow: null,
        ShopItem: null,
    }),
    LongDescription: io_ts_1.string,
    MaxBid: io_ts_1.number,
    MaxBidder: (0, checkTypes_1.nullable)((0, io_ts_1.type)({
        Id: io_ts_1.number,
        Alias: io_ts_1.string,
        TotalRating: io_ts_1.number,
    })),
    NextBid: io_ts_1.number,
    OpeningBid: io_ts_1.number,
    OwnReferences: (0, checkTypes_1.nullable)((0, io_ts_1.array)(io_ts_1.string)),
    PaymentCondition: io_ts_1.string,
    PaymentOptions: (0, io_ts_1.type)({
        int: (0, io_ts_1.array)(io_ts_1.number),
    }),
    PaymentTypeId: io_ts_1.number,
    Paypal: io_ts_1.boolean,
    RemainingQuantity: io_ts_1.number,
    ReservePrice: (0, checkTypes_1.undefinable)(io_ts_1.number),
    ReservePriceReached: (0, checkTypes_1.undefinable)(io_ts_1.boolean),
    Seller: (0, io_ts_1.type)({
        Id: io_ts_1.number,
        Alias: io_ts_1.string,
        TotalRating: io_ts_1.number,
    }),
    ShippingCondition: io_ts_1.string,
    ShippingOptions: (0, io_ts_1.array)((0, io_ts_1.type)({
        ShippingOptionId: io_ts_1.number,
        Cost: io_ts_1.number,
        ShippingWeight: (0, checkTypes_1.undefinable)(io_ts_1.number),
        ShippingProductId: (0, checkTypes_1.undefinable)(io_ts_1.number),
    })),
    ShortDescription: io_ts_1.string,
    StartDate: io_ts_types_1.date,
    StartQuantity: io_ts_1.number,
    Status: (0, io_ts_1.type)({
        Ended: io_ts_1.boolean,
        GotBidders: io_ts_1.boolean,
        GotWinner: io_ts_1.boolean,
    }),
    Thumbnail: io_ts_1.boolean,
    ThumbnailLink: io_ts_1.string,
    TotalBids: io_ts_1.number,
    VAT: (0, checkTypes_1.undefinable)(io_ts_1.number),
});
const sellerItemCodec = (0, io_ts_1.type)({
    ItemId: io_ts_1.number,
    Title: io_ts_1.string,
    Description: io_ts_1.string,
    StartPrice: io_ts_1.number,
    Currency: io_ts_1.string,
    CategoryId: io_ts_1.number,
    CategoryName: io_ts_1.string,
    StartTime: io_ts_1.string,
    EndTime: io_ts_1.string,
    SellerId: io_ts_1.number,
    SellerName: io_ts_1.string,
    SellerEmail: io_ts_1.string,
    SellerRating: io_ts_1.number,
    SellerRatingCount: io_ts_1.number,
    SellerCountry: io_ts_1.string,
    SellerCounty: io_ts_1.string,
    SellerCity: io_ts_1.string,
    SellerZipCode: io_ts_1.string,
    SellerAddress: io_ts_1.string,
    SellerPhone: io_ts_1.string,
    SellerMobile: io_ts_1.string,
    SellerFax: io_ts_1.string,
    SellerUrl: io_ts_1.string,
    SellerCompany: io_ts_1.string,
    SellerInfo: io_ts_1.string,
    BidCount: io_ts_1.number,
    HighBidderId: io_ts_1.number,
    HighBidderName: io_ts_1.string,
    HighBidderEmail: io_ts_1.string,
    HighBidderRating: io_ts_1.number,
    HighBidderRatingCount: io_ts_1.number,
    HighBidderCountry: io_ts_1.string,
    HighBidderCounty: io_ts_1.string,
    HighBidderCity: io_ts_1.string,
    HighBidderZipCode: io_ts_1.string,
    HighBidderAddress: io_ts_1.string,
    HighBidderPhone: io_ts_1.string,
    HighBidderMobile: io_ts_1.string,
    HighBidderFax: io_ts_1.string,
    HighBidderUrl: io_ts_1.string,
    HighBidderCompany: io_ts_1.string,
    HighBidderInfo: io_ts_1.string,
    BuyNowPrice: io_ts_1.number,
    BuyNowCurrency: io_ts_1.string,
    PictureUrl: io_ts_1.string,
    PictureWidth: io_ts_1.number,
    PictureHeight: io_ts_1.number,
    PictureThumbUrl: io_ts_1.string,
    PictureThumbWidth: io_ts_1.number,
    PictureThumbHeight: io_ts_1.number,
    IsBuyNow: io_ts_1.boolean,
    IsAuction: io_ts_1.boolean,
    IsFixedPrice: io_ts_1.boolean,
    IsNew: io_ts_1.boolean,
    IsCharity: io_ts_1.boolean,
    IsBuyerRegistred: io_ts_1.boolean,
    IsSellerRegistred: io_ts_1.boolean,
    IsPrivateAuction: io_ts_1.boolean,
    IsCompanySale: io_ts_1.boolean,
    IsPowerSeller: io_ts_1.boolean,
    IsAdult: io_ts_1.boolean,
    IsVerifiedSeller: io_ts_1.boolean,
    IsAuthenticated: io_ts_1.boolean,
    IsAuthenticatedBuyer: io_ts_1.boolean,
    IsAuthenticatedSeller: io_ts_1.boolean,
});
const getSellerItemsResultCodec = (0, io_ts_1.type)({
    TotalNumberOfItems: io_ts_1.number,
    TotalNumberOfPages: io_ts_1.number,
    Items: (0, io_ts_1.array)(sellerItemCodec),
});
//# sourceMappingURL=publicService.js.map