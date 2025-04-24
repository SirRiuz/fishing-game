export interface Player {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
}

export interface LeaderboardResponse {
  players: Player[];
}
