import { MarketItem } from "../../../services/market/types";
import { Container } from "./styled";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BadgeIcon from "@mui/icons-material/Badge";
import CategoryIcon from "@mui/icons-material/Category";
import DescriptionIcon from "@mui/icons-material/Description";

export default function ModalContent({ data }: { data: MarketItem }) {
  return (
    <Container style={{ maxWidth: 400 }}>
      <span style={{ fontSize: 25, marginBottom: 20 }}>Market:</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <BadgeIcon />
          <span>Id: {data.id}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <PersonIcon />
          <span>Name: {data.name}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <CategoryIcon />
          <span>Type: {data.type}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <DescriptionIcon />
          <span>Description: {data.description}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <AttachMoneyIcon />
          <span>Cost: {data.cost}</span>
        </div>
      </div>
    </Container>
  );
}
