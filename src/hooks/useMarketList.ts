import { useQuery } from "@tanstack/react-query";
import { getMarketList } from "../services/market";
import { MarketItem } from "../services/market/types";

export default function useMarketList() {
  const query = useQuery({
    queryKey: ["marketList"],
    queryFn: async () => {
      // This returns the cached data in case there's no internet connection.
      if (!navigator.onLine) {
        const cached = localStorage.getItem("marketList");
        return { items: cached ? (JSON.parse(cached) as MarketItem[]) : [] };
      }

      const res = await getMarketList();
      // It is saved in local storage to be displayed in case
      // there's no internet connection.
      localStorage.setItem("marketList", JSON.stringify(res.items));
      return res;
    },
    staleTime: Infinity,
    retry: 1,
  });

  return { markets: query.data?.items ?? [], isLoad: query.isLoading };
}
