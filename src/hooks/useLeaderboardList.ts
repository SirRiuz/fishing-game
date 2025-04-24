import { useQuery } from "@tanstack/react-query";
import { getLeaderboardList } from "../services/leaderboard";
import { Player } from "../services/leaderboard/types";

export default function useLeaderboardList() {
  const query = useQuery({
    queryKey: ["leaderboardList"],
    queryFn: async () => {
      // Esto retornada los datos cacheados en caso de no tener
      // conexion a internet
      if (!navigator.onLine) {
        const cached = localStorage.getItem("leaderboardList");
        return { players: cached ? (JSON.parse(cached) as Player[]) : [] };
      }

      const res = await getLeaderboardList();
      // Se guarda en la local storasge para desplegar en cado
      // de no tener conexion a internet
      localStorage.setItem("leaderboardList", JSON.stringify(res.players));
      return res;
    },
    staleTime: Infinity,
    retry: 1,
  });

  return { players: query.data?.players ?? [], isLoad: query.isLoading };
}
