import { MarketResponse } from "./types";

const API_URL = "https://api-game.bloque.app/game/market";

export function getMarketList(): Promise<MarketResponse> {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data as MarketResponse);
}
