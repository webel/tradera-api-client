"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByAlias = exports.getAdvancedSearch = exports.getCategories = void 0;
const traderaApiClient_1 = require("./traderaApiClient");
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ID = process.env.TRADERA_APPLICATION_ID;
const KEY = process.env.TRADERA_APPLICATION_KEY;
if (ID === undefined || KEY === undefined) {
    throw new Error('Missing TRADERA_APPLICATION_ID or TRADERA_APPLICATION_KEY environment variable');
}
const apiClient = new traderaApiClient_1.TraderaApiClient(Number(ID), KEY);
async function init() {
    await apiClient.init();
}
async function getCategories() {
    var _a;
    const publicService = (_a = apiClient === null || apiClient === void 0 ? void 0 : apiClient.publicService) !== null && _a !== void 0 ? _a : null;
    const result = await publicService.GetCategories();
    fs_1.default.writeFileSync('data-examples/categories.json', JSON.stringify(result, null, 2));
}
exports.getCategories = getCategories;
async function getAdvancedSearch() {
    var _a;
    const searchService = (_a = apiClient === null || apiClient === void 0 ? void 0 : apiClient.searchService) !== null && _a !== void 0 ? _a : null;
    const result = await searchService.SearchAdvanced({
        request: {
            ItemStatus: "Active",
            CategoryId: 1604,
            OnlyItemsWithThumbnail: true,
            ItemCondition: "OnlySecondHand",
            ItemsPerPage: 500,
        }
    });
    fs_1.default.writeFileSync('data-examples/advancedSearch.json', JSON.stringify(result, null, 2));
}
exports.getAdvancedSearch = getAdvancedSearch;
async function getUserByAlias() {
    var _a;
    const publicService = (_a = apiClient === null || apiClient === void 0 ? void 0 : apiClient.publicService) !== null && _a !== void 0 ? _a : null;
    const result = await publicService.GetUserByAlias({
        alias: "Sellpy",
    });
    fs_1.default.writeFileSync('data-examples/userByAlias.json', JSON.stringify(result, null, 2));
}
exports.getUserByAlias = getUserByAlias;
init().then(() => {
    getAdvancedSearch();
});
//# sourceMappingURL=exampleUsage.js.map