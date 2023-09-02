import { array, boolean, keyof, number, string, type, TypeOf } from "io-ts";
import { date } from "io-ts-types";
import { checkTypes, nullable, undefinable } from "../checkTypes";
import { Service } from "../service";

export class PublicService extends Service {
    // TODO public async FetchToken(request)

    // TODO public async GetAcceptedBidderTypes(request)

    // TODO public async GetAttributeDefinitions(request)

    public async GetCategories(): Promise<GetCategoriesResult> {
        const result = await this.callApiMethod<GetCategoriesResult>(
            "GetCategories",
            "GetCategoriesResult",
        );
        return result;
    }
    // TODO public async GetCounties(request)

    // TODO public async GetExpoItemTypes(request)

    // TODO public async GetFeedback(request)

    // TODO public async GetFeedbackSummary(request)

    public async GetItem(request: GetItemRequest) {
        const result = await this.callApiMethod<GetItemResult>("GetItem", "GetItemResult", request);
        return checkTypes(result, getItemResultCodec);
    }

    // TODO public async GetItemAddedDescriptions(request)

    // TODO public async GetItemFieldValues(request)

    // TODO public async GetItemTypes(request)

    public async GetOfficalTime() {
        return this.callApiMethod<GetOfficalTimeResult>("GetOfficalTime", "GetOfficalTimeResult");
    }

    /**
     * @deprecated
     */
    // TODO public async GetPaymentTypes(request)

    /**
     * @deprecated
     */
    // TODO public async GetSearchResult(request)

    /**
     * @deprecated
     */
    public async GetSearchResultAdvanced(filter?: GetSearchResultAdvancedRequest) {
        return this.callApiMethod<GetSearchResultAdvancedResult>(
            "GetSearchResultAdvanced",
            "GetSearchResultAdvancedResult",
            filter,
        );
    }

    // TODO public async GetSearchResultAdvancedXml(request)

    public async GetSellerItems(request: GetSellerItemsRequest) {
        const result = await this.callApiMethod<GetSellerItemsResult>("GetSellerItems", "GetSellerItemsResult", request);
        return checkTypes(result, getSellerItemsResultCodec);
    }

    // TODO public async GetSellerItemsQuickInfo(request)

    // TODO public async GetShippingProducts(request)

    // TODO public async GetShippingOptions(request)

    // TODO public async GetUserByAlias(request)
    public async GetUserByAlias(request: GetUserByAliasRequest): Promise<GetUserByAliasResult> {
        const result = await this.callApiMethod<GetUserByAliasResult>("GetUserByAlias", "GetUserByAliasResult", request);
        return result;
    }
}

type GetItemRequest = {
    itemId: number;
};

type GetOfficalTimeResult = Date;

type GetSearchResultAdvancedResult = {
    TotalNumberOfItems: number;
    TotalNumberOfPages: number;
    Items: {
        ShippingOptions: {
            ShippingOptionId: number;
            Cost: number;
            ShippingWeight: number;
            ShippingProductId: number;
        }[];
        PaymentOptions: unknown; // TODO
        ImageLinks: string[];
        Buyers: {
            Id: number;
            Alias: string;
            FirstName: string;
            LastName: string;
            Email: string;
            TotalRating: number;
            PhoneNumber: string;
            MobilePhoneNumber: string;
            Address: string;
            ZipCode: string;
            City: string;
            CountryName: string;
            TransactionId: number;
        }[];
        Status: {
            Ended: boolean;
            GotBidders: boolean;
            GotWinner: boolean;
        };
        StartQuantity: number;
        RemainingQuantity: number;
        ItemType: "Auction" | "PureBuyItNow" | "ShopItem";
        Id: number;
        VAT: number;
        ShortDescription: string;
        OwnReferences: unknown; // TODO
        AttributeValues: unknown; // TODO
        ItemAttributes: unknown; // TODO
        LongDescription: string;
        StartDate: Date;
        EndDate: Date;
        CategoryId: number;
        OpeningBid: number;
        ReservePrice: number;
        ReservePriceReached: boolean;
        BuyItNowPrice: number;
        NextBid: number;
        PaymentCondition: string;
        ShippingCondition: string;
        AcceptsPickup: boolean;
        TotalBids: number;
        MaxBid: number;
        Bold: boolean;
        Thumbnail: boolean;
        Highlight: boolean;
        FeaturedItem: boolean;
        ItemLink: string;
        ThumbnailLink: string;
        AcceptedBuyerId: number;
        Paypal: boolean;
        PaymentTypeId: number;
        Seller: {
            Id: number;
            Alias: string;
            FirstName: string;
            LastName: string;
            Email: string;
            TotalRating: number;
            PhoneNumber: string;
            MobilePhoneNumber: string;
            Address: string;
            ZipCode: string;
            City: string;
            CountryName: string;
            TransactionId: number;
        };
        MaxBidder: {
            Id: number;
            Alias: string;
            FirstName: string;
            LastName: string;
            Email: string;
            TotalRating: number;
            PhoneNumber: string;
            MobilePhoneNumber: string;
            Address: string;
            ZipCode: string;
            City: string;
            CountryName: string;
            TransactionId: number;
        };
    }[];
};

type GetSearchResultAdvancedRequest = {
    query: {
        SearchWords?: string;
        CategoryId?: number;
        SearchInDescription?: boolean;
        Mode?: "AllWords" | "AnyWords";
        PriceMinimum?: number;
        PriceMaximum?: number;
        BidsMinimum?: number;
        BidsMaximum?: number;
        ZipCode?: string;
        CountyId?: number;
        Alias?: string;
        Brands?: string[];
        Attributes?: any;
        OrderBy?:
            | "EndDateAscending"
            | "EndDateDescending"
            | "PriceAscending"
            | "PriceDescending"
            | "BidsDescending";
        ItemStatus?: "Active" | "Ended";
        ItemType?: "All" | "Auction" | "FixedPrice";
        OnlyAuctionsWithBuyNow?: boolean;
        OnlyItemsWithThumbnail?: boolean;
        ItemsPerPage?: number; // Minimum 1, maximum 500. 0 or blank for default (50).
        PageNumber?: number;
        ItemConditon?: "All" | "OnlyNew" | "OnlySecondHand";
        SellerType?: "All" | "OnlyPrivate" | "OnlyBusiness";
        // Missing fields based on Tradera API documentation
        ItemTypes?: string[]; // Array of item types
        ItemStatuses?: string[]; // Array of item statuses
        IncludeEndedItems?: boolean;
        IncludeItemsWithNoBids?: boolean;
        IncludeItemsWithReserveNotMet?: boolean;
        IncludeItemsWithNoReserve?: boolean;
        IncludeItemsWithBuyNow?: boolean;
        IncludeItemsWithNoBuyNow?: boolean;
        IncludeItemsWithNoThumbnail?: boolean;
        IncludeItemsWithThumbnail?: boolean;
        IncludeItemsWithNoAcceptedPayments?: boolean;
        IncludeItemsWithAcceptedPayments?: boolean;
        IncludeItemsWithNoShippingOptions?: boolean;
        IncludeItemsWithShippingOptions?: boolean;
    };
};

type CategoryAttributes = {
    Id: number;
    Name: string;
};

type Category = {
  attributes: CategoryAttributes;
  Category?: Category[] | CategoryAttributes[];
};

type GetCategoriesResult = {
  Category: Category[];
};

type GetItemResult = TypeOf<typeof getItemResultCodec>;
const getItemResultCodec = type({
    AcceptedBuyerId: number,
    AcceptsPickup: boolean,
    Bold: boolean,
    BuyItNowPrice: undefinable(number),
    Buyers: array(
        type({
            Id: number,
            Alias: string,
            TotalRating: number,
        }),
    ),
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
    MaxBidder: nullable(
        type({
            Id: number,
            Alias: string,
            TotalRating: number,
        }),
    ),
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
    ShippingOptions: array(
        type({
            ShippingOptionId: number,
            Cost: number,
            ShippingWeight: undefinable(number),
            ShippingProductId: undefinable(number),
        }),
    ),
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

type GetSellerItemsRequest = {
  sellerId: number;
  pageNumber?: number;
  pageSize?: number;
  sort?: string;
  filter?: string;
};

type GetSellerItemsResult = {
  TotalNumberOfItems: number;
  TotalNumberOfPages: number;
  Items: {
    ItemId: number;
    Title: string;
    Description: string;
    StartPrice: number;
    Currency: string;
    CategoryId: number;
    CategoryName: string;
    StartTime: Date;
    EndTime: Date;
    SellerId: number;
    SellerName: string;
    SellerEmail: string;
    SellerRating: number;
    SellerRatingCount: number;
    SellerCountry: string;
    SellerCounty: string;
    SellerCity: string;
    SellerZipCode: string;
    SellerAddress: string;
    SellerPhone: string;
    SellerMobile: string;
    SellerFax: string;
    SellerUrl: string;
    SellerCompany: string;
    SellerInfo: string;
    BidCount: number;
    HighBidderId: number;
    HighBidderName: string;
    HighBidderEmail: string;
    HighBidderRating: number;
    HighBidderRatingCount: number;
    HighBidderCountry: string;
    HighBidderCounty: string;
    HighBidderCity: string;
    HighBidderZipCode: string;
    HighBidderAddress: string;
    HighBidderPhone: string;
    HighBidderMobile: string;
    HighBidderFax: string;
    HighBidderUrl: string;
    HighBidderCompany: string;
    HighBidderInfo: string;
    BuyNowPrice: number;
    BuyNowCurrency: string;
    PictureUrl: string;
    PictureWidth: number;
    PictureHeight: number;
    PictureThumbUrl: string;
    PictureThumbWidth: number;
    PictureThumbHeight: number;
    IsBuyNow: boolean;
    IsAuction: boolean;
    IsFixedPrice: boolean;
    IsNew: boolean;
    IsCharity: boolean;
    IsBuyerRegistred: boolean;
    IsSellerRegistred: boolean;
    IsPrivateAuction: boolean;
    IsCompanySale: boolean;
    IsPowerSeller: boolean;
    IsAdult: boolean;
    IsVerifiedSeller: boolean;
    IsAuthenticated: boolean;
    IsAuthenticatedBuyer: boolean;
    IsAuthenticatedSeller: boolean;
    IsAuthenticatedBidder: boolean;
  }[];
};

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

type GetUserByAliasRequest = {
    alias: string;
};

type GetUserByAliasResult = {
    Id: number;
    Alias: string;
    FirstName: string;
    LastName: string;
    Email: string;
    TotalRating: number;
    PhoneNumber: string;
    MobilePhoneNumber: string;
    Address: string;
    ZipCode: string;
    City: string;
    CountryName: string;
    PersonalNumber: string;
    TransactionId: number;
}