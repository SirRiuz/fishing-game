import { Player } from "../../services/leaderboard/types";

export interface SelectedPlayer extends Player {
  layoutId: string;
}