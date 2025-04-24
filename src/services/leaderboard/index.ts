import { LeaderboardResponse } from "./types";

const API_URL = "https://api-game.bloque.app/game/leaderboard";

export function getLeaderboardList(): Promise<LeaderboardResponse> {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data as LeaderboardResponse);
}
