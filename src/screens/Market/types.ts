import { MarketItem } from "../../services/market/types";

export interface MarketSelected extends MarketItem {
  layoutId: string;
}
