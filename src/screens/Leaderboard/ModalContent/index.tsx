import { Player } from "../../../services/leaderboard/types";
import { Container } from "./styled";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PersonIcon from "@mui/icons-material/Person";
import BarChartIcon from "@mui/icons-material/BarChart";
import BoltIcon from "@mui/icons-material/Bolt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function ModalContent({ data }: { data: Player }) {
  return (
    <Container>
      <span style={{ fontSize: 25, marginBottom: 20 }}>Leaderboard:</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <MilitaryTechIcon />
          <span>Rank: {data.rank}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <PersonIcon />
          <span>User name: @{data.username}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <BarChartIcon />
          <span>Level: {data.level}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <BoltIcon />
          <span>XP: {data.xp}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <AttachMoneyIcon />
          <span>GOLD: {data.gold}</span>
        </div>
      </div>
    </Container>
  );
}
