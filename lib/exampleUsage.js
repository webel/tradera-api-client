import { TraderaApiClient } from "./traderaApiClient";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();
const ID = process.env.TRADERA_APPLICATION_ID;
const KEY = process.env.TRADERA_APPLICATION_KEY;
if (ID === undefined || KEY === undefined) {
    throw new Error("Missing TRADERA_APPLICATION_ID or TRADERA_APPLICATION_KEY environment variable");
}
const apiClient = new TraderaApiClient(Number(ID), KEY);
async function init() {
    await apiClient.init();
}
export async function getCategories() {
    var _a;
    const publicService = (_a = apiClient === null || apiClient === void 0 ? void 0 : apiClient.publicService) !== null && _a !== void 0 ? _a : null;
    const result = await publicService.GetCategories();
    fs.writeFileSync("data-examples/categories.json", JSON.stringify(result, null, 2));
}
export async function getAdvancedSearch() {
    var _a;
    const searchService = (_a = apiClient === null || apiClient === void 0 ? void 0 : apiClient.searchService) !== null && _a !== void 0 ? _a : null;
    const result = await searchService.SearchAdvanced({
        request: {
            ItemStatus: "Active",
            CategoryId: 1604,
            OnlyItemsWithThumbnail: true,
            ItemCondition: "OnlySecondHand",
            ItemsPerPage: 500,
        },
    });
    fs.writeFileSync("data-examples/advancedSearch.json", JSON.stringify(result, null, 2));
}
export async function getUserByAlias() {
    var _a;
    const publicService = (_a = apiClient === null || apiClient === void 0 ? void 0 : apiClient.publicService) !== null && _a !== void 0 ? _a : null;
    const result = await publicService.GetUserByAlias({
        alias: "Sellpy",
    });
    fs.writeFileSync("data-examples/userByAlias.json", JSON.stringify(result, null, 2));
}
init().then(() => {
    getAdvancedSearch();
});
//# sourceMappingURL=exampleUsage.js.map