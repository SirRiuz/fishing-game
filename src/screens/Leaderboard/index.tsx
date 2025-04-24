import { Grid } from "@mui/material";
import { useState } from "react";
import { SelectedPlayer } from "./types";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import useLeaderboardList from "../../hooks/useLeaderboardList";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import Modal from "../../components/Modal";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import ModalContent from "./ModalContent";

export default function Leaderboard() {
  const { players, isLoad } = useLeaderboardList();
  const [selected, setSelected] = useState<SelectedPlayer | null>(null);

  return (
    <Grid container justifyContent={"center"} gap={2}>
      <LayoutGroup>
        <AnimatePresence>
          {isLoad && <LoaderSkeleton />}
          {!isLoad &&
            players.map((i, k) => (
              <Card
                key={k}
                layoutId={`id_${i.username}_${i.level}`}
                onClick={() =>
                  setSelected({
                    layoutId: `id_${i.username}_${i.level}`,
                    ...i,
                  })
                }
              >
                <strong style={{ color: "white" }}>@{i.username}</strong>
              </Card>
            ))}
          {selected && <Screen onClick={() => setSelected(null)} />}
          {selected && (
            <Modal
              layoutId={selected.layoutId}
              onClick={() => setSelected(null)}
              renderContent={<ModalContent data={selected} />}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Grid>
  );
}
