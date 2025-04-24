import { useQuery } from "@tanstack/react-query";
import { getMarketList } from "../services/market";
import { MarketItem } from "../services/market/types";

export default function useMarketList() {
  const query = useQuery({
    queryKey: ["marketList"],
    queryFn: async () => {
      // Esto retornada los datos cacheados en caso de no tener
      // conexion a internet
      if (!navigator.onLine) {
        const cached = localStorage.getItem("marketList");
        return { items: cached ? (JSON.parse(cached) as MarketItem[]) : [] };
      }

      const res = await getMarketList();
      // Se guarda en la local storasge para desplegar en cado
      // de no tener conexion a internet
      localStorage.setItem("marketList", JSON.stringify(res.items));
      return res;
    },
    staleTime: Infinity,
    retry: 1,
  });

  return { markets: query.data?.items ?? [], isLoad: query.isLoading };
}
