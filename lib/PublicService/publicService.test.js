"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const traderaApiClient_1 = require("../traderaApiClient");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sellerId = 3786316;
const itemId = 606569191;
describe('PublicService', () => {
    let publicService;
    beforeAll(async () => {
        var _a;
        const appId = Number(process.env.TRADERA_APPLICATION_ID);
        const appKey = process.env.TRADERA_APPLICATION_KEY;
        if (appId === undefined || appKey === undefined) {
            throw new Error('Missing TRADERA_APPLICATION_ID or TRADERA_APPLICATION_KEY environment variable');
        }
        const apiClient = new traderaApiClient_1.TraderaApiClient(appId, appKey);
        try {
            await apiClient.init();
            publicService = (_a = apiClient === null || apiClient === void 0 ? void 0 : apiClient.publicService) !== null && _a !== void 0 ? _a : null;
        }
        catch (error) {
            console.log(error);
        }
    });
    describe('GetCategories', () => {
        it('should return an array of categories', async () => {
            const result = await publicService.GetCategories();
            console.log(result);
            expect(Array.isArray(result.Category)).toBe(true);
        });
    });
    describe('GetItem', () => {
        it('should return an item with the specified ID', async () => {
            const result = await publicService.GetItem({ itemId });
            expect(result).toBeDefined();
        });
    });
    describe('GetOfficalTime', () => {
        it('should return a Date object', async () => {
            const result = await publicService.GetOfficalTime();
            expect(result instanceof Date).toBe(true);
        });
    });
    describe('GetSellerItems', () => {
        it('should return an array of seller items', async () => {
            const result = await publicService.GetSellerItems({ sellerId });
            expect(Array.isArray(result)).toBe(true);
        });
    });
});
//# sourceMappingURL=publicService.test.js.map