import { array, boolean, keyof, number, string, type } from "io-ts";
import { date } from "io-ts-types";
import { checkTypes, nullable, undefinable } from "../checkTypes";
import { Service } from "../service";
export class PublicService extends Service {
    async GetCategories() {
        const result = await this.callApiMethod("GetCategories", "GetCategoriesResult");
        return result;
    }
    async GetItem(request) {
        const result = await this.callApiMethod("GetItem", "GetItemResult", request);
        return checkTypes(result, getItemResultCodec);
    }
    async GetOfficalTime() {
        return this.callApiMethod("GetOfficalTime", "GetOfficalTimeResult");
    }
    async GetSearchResultAdvanced(filter) {
        return this.callApiMethod("GetSearchResultAdvanced", "GetSearchResultAdvancedResult", filter);
    }
    async GetSellerItems(request) {
        const result = await this.callApiMethod("GetSellerItems", "GetSellerItemsResult", request);
        return checkTypes(result, getSellerItemsResultCodec);
    }
    async GetUserByAlias(request) {
        const result = await this.callApiMethod("GetUserByAlias", "GetUserByAliasResult", request);
        return result;
    }
}
const getItemResultCodec = type({
    AcceptedBuyerId: number,
    AcceptsPickup: boolean,
    Bold: boolean,
    BuyItNowPrice: undefinable(number),
    Buyers: array(type({
        Id: number,
        Alias: string,
        TotalRating: number,
    })),
    CategoryId: number,
    EndDate: date,
    FeaturedItem: boolean,
    Highlight: boolean,
    Id: number,
    ImageLinks: type({
        string: array(string),
    }),
    ItemAttributes: type({
        int: array(number),
    }),
    ItemLink: string,
    ItemType: keyof({
        Auction: null,
        PureBuyItNow: null,
        ShopItem: null,
    }),
    LongDescription: string,
    MaxBid: number,
    MaxBidder: nullable(type({
        Id: number,
        Alias: string,
        TotalRating: number,
    })),
    NextBid: number,
    OpeningBid: number,
    OwnReferences: nullable(array(string)),
    PaymentCondition: string,
    PaymentOptions: type({
        int: array(number),
    }),
    PaymentTypeId: number,
    Paypal: boolean,
    RemainingQuantity: number,
    ReservePrice: undefinable(number),
    ReservePriceReached: undefinable(boolean),
    Seller: type({
        Id: number,
        Alias: string,
        TotalRating: number,
    }),
    ShippingCondition: string,
    ShippingOptions: array(type({
        ShippingOptionId: number,
        Cost: number,
        ShippingWeight: undefinable(number),
        ShippingProductId: undefinable(number),
    })),
    ShortDescription: string,
    StartDate: date,
    StartQuantity: number,
    Status: type({
        Ended: boolean,
        GotBidders: boolean,
        GotWinner: boolean,
    }),
    Thumbnail: boolean,
    ThumbnailLink: string,
    TotalBids: number,
    VAT: undefinable(number),
});
const sellerItemCodec = type({
    ItemId: number,
    Title: string,
    Description: string,
    StartPrice: number,
    Currency: string,
    CategoryId: number,
    CategoryName: string,
    StartTime: string,
    EndTime: string,
    SellerId: number,
    SellerName: string,
    SellerEmail: string,
    SellerRating: number,
    SellerRatingCount: number,
    SellerCountry: string,
    SellerCounty: string,
    SellerCity: string,
    SellerZipCode: string,
    SellerAddress: string,
    SellerPhone: string,
    SellerMobile: string,
    SellerFax: string,
    SellerUrl: string,
    SellerCompany: string,
    SellerInfo: string,
    BidCount: number,
    HighBidderId: number,
    HighBidderName: string,
    HighBidderEmail: string,
    HighBidderRating: number,
    HighBidderRatingCount: number,
    HighBidderCountry: string,
    HighBidderCounty: string,
    HighBidderCity: string,
    HighBidderZipCode: string,
    HighBidderAddress: string,
    HighBidderPhone: string,
    HighBidderMobile: string,
    HighBidderFax: string,
    HighBidderUrl: string,
    HighBidderCompany: string,
    HighBidderInfo: string,
    BuyNowPrice: number,
    BuyNowCurrency: string,
    PictureUrl: string,
    PictureWidth: number,
    PictureHeight: number,
    PictureThumbUrl: string,
    PictureThumbWidth: number,
    PictureThumbHeight: number,
    IsBuyNow: boolean,
    IsAuction: boolean,
    IsFixedPrice: boolean,
    IsNew: boolean,
    IsCharity: boolean,
    IsBuyerRegistred: boolean,
    IsSellerRegistred: boolean,
    IsPrivateAuction: boolean,
    IsCompanySale: boolean,
    IsPowerSeller: boolean,
    IsAdult: boolean,
    IsVerifiedSeller: boolean,
    IsAuthenticated: boolean,
    IsAuthenticatedBuyer: boolean,
    IsAuthenticatedSeller: boolean,
});
const getSellerItemsResultCodec = type({
    TotalNumberOfItems: number,
    TotalNumberOfPages: number,
    Items: array(sellerItemCodec),
});
//# sourceMappingURL=publicService.js.map