import { TraderaApiClient } from './traderaApiClient';
import { PublicService } from './PublicService/publicService';
import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const ID = process.env.TRADERA_APPLICATION_ID;
const KEY = process.env.TRADERA_APPLICATION_KEY;

// Throw an error if the appId or appKey is missing
if (ID === undefined || KEY === undefined) {
    throw new Error('Missing TRADERA_APPLICATION_ID or TRADERA_APPLICATION_KEY environment variable');
}

// Initiates the TraderaApiClient
const apiClient = new TraderaApiClient(Number(ID), KEY);

async function init() {
    await apiClient.init();
}

export async function getCategories() {
    const publicService: PublicService = apiClient?.publicService ?? null; // add null check
    const result = await publicService.GetCategories();

    // Save the result to a json file 
    fs.writeFileSync('data-examples/categories.json', JSON.stringify(result, null, 2));
}

export async function getAdvancedSearch() {
    const searchService = apiClient?.searchService ?? null;
    const result = await searchService.SearchAdvanced({
        request: {
            ItemStatus: "Active",
            CategoryId: 1604,
            OnlyItemsWithThumbnail: true,
            ItemCondition: "OnlySecondHand",
            ItemsPerPage: 500,
        }})

    // Save the result to a json file
    fs.writeFileSync('data-examples/advancedSearch.json', JSON.stringify(result, null, 2));
}

export async function getUserByAlias() {
    const publicService = apiClient?.publicService ?? null;
    const result = await publicService.GetUserByAlias({
        alias: "Sellpy",
    })

    // Save the result to a json file
    fs.writeFileSync('data-examples/userByAlias.json', JSON.stringify(result, null, 2));
}


// Run the init and getCategories functions
init().then(() => {
    // getCategories()
    getAdvancedSearch()
    // getUserByAlias()
});