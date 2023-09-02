import { TraderaApiClient } from '../traderaApiClient';
import { PublicService } from './publicService';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const sellerId = 3786316;
const itemId = 606569191;

describe('PublicService', () => {
  let publicService: PublicService;

beforeAll(async () => {
    // Get the appId and appKey from environment variables
    const appId = Number(process.env.TRADERA_APPLICATION_ID);
    const appKey = process.env.TRADERA_APPLICATION_KEY;

    // Throw an error if the appId or appKey is missing
    if (appId === undefined || appKey === undefined) {
        throw new Error('Missing TRADERA_APPLICATION_ID or TRADERA_APPLICATION_KEY environment variable');
    }

    // Runs before all tests in this file
    const apiClient = new TraderaApiClient(appId, appKey);
    try {

    
    await apiClient.init();
        publicService = apiClient?.publicService ?? null; // add null check

    } catch (error) {
        console.log(error);
    }
});

  describe('GetCategories', () => {
    it('should return an array of categories', async () => {
      const result = await publicService.GetCategories();
      console.log(result)
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