import { Service } from "../service";
export declare class SearchService extends Service {
    SearchAdvanced(request: SearchAdvancedRequest): Promise<{
        Errors: {
            Code: string;
            Message: string;
        }[] | undefined;
        Items: {
            CategoryId: number;
            EndDate: Date;
            HasBids: boolean;
            Id: number;
            IsEnded: boolean;
            ItemType: "Auction" | "PureBuyItNow" | "ShopItem" | "AuctionWithBuyItNow";
            MaxBid: number;
            NextBid: number;
            SellerAlias: string;
            SellerDsrAverage: number;
            SellerId: number;
            ShortDescription: string;
            ThumbnailLink: string;
        }[];
        TotalNumberOfItems: number;
        TotalNumberOfPages: number;
    }>;
}
type SearchAdvancedRequest = {
    request: {
        SearchWords?: string;
        CategoryId?: number;
        SearchInDescription?: boolean;
        Mode?: "Or" | "Exact" | "And";
        PriceMinimum?: number | null;
        PriceMaximum?: number | null;
        BidsMinimum?: number | null;
        BidsMaximum?: number | null;
        ZipCode?: string;
        CountyId?: number;
        Alias?: string | null;
        OrderBy?: "Relevance" | "BidsAscending" | "BidsDescending" | "PriceAscending" | "PriceDescending" | "EndDateAscending" | "EndDateDescending" | "StartDateDescending" | "DsrAverage";
        ItemStatus?: "Ended" | "Active";
        ItemType?: "All" | "Auction" | "BuyItNow";
        OnlyAuctionsWithBuyNow?: boolean;
        OnlyItemsWithThumbnail?: boolean;
        ItemsPerPage?: number;
        PageNumber?: number;
        ItemCondition?: "All" | "OnlySecondHand" | "OnlyNew";
        SellerType?: "All" | "Private" | "Company";
        Brands?: string[];
        CampaignCodeIds?: number[];
    };
};
export {};
//# sourceMappingURL=searchService.d.ts.map