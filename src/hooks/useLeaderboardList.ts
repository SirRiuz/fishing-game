import { useQuery } from "@tanstack/react-query";
import { getLeaderboardList } from "../services/leaderboard";
import { Player } from "../services/leaderboard/types";

export default function useLeaderboardList() {
  const query = useQuery({
    queryKey: ["leaderboardList"],
    queryFn: async () => {
      // This returns the cached data in case there's no internet connection.
      if (!navigator.onLine) {
        const cached = localStorage.getItem("leaderboardList");
        return { players: cached ? (JSON.parse(cached) as Player[]) : [] };
      }

      const res = await getLeaderboardList();
      // It is saved in local storage to be displayed in case
      // there's no internet connection.
      localStorage.setItem("leaderboardList", JSON.stringify(res.players));
      return res;
    },
    staleTime: Infinity,
    retry: 1,
  });

  return { players: query.data?.players ?? [], isLoad: query.isLoading };
}
