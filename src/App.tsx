import { Container } from "@mui/material";
import React, { useState } from "react";
import Leaderboard from "./screens/Leaderboard";
import Market from "./screens/Market";
import AplicationProvider from "./providers/AplicationProvider";
import Background from "./components/Background";
import AppBar from "./components/AppBar";

export default function App() {
  const [router, setRouter] = useState<"leaderboard" | "market">("leaderboard");
  const navigateTo = (screen: "leaderboard" | "market") => setRouter(screen);
  return (
    <AplicationProvider>
      <Background />
      <Container>
        <AppBar navigate={(path) => navigateTo(path)} path={router} />
        <React.Fragment>
          {router === "leaderboard" && <Leaderboard />}
          {router === "market" && <Market />}
        </React.Fragment>
      </Container>
    </AplicationProvider>
  );
}
