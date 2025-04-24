import { useState } from "react";
import { Grid } from "@mui/material";
import { MarketSelected } from "./types";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import useMarketList from "../../hooks/useMarketList";
import LoaderSkeleton from "../../components/LoaderSkeleton";
import Card from "../../components/Card";
import Screen from "../../components/Screen";
import Modal from "../../components/Modal";
import ModalContent from "./ModalContent";

export default function Market() {
  const { markets, isLoad } = useMarketList();
  const [selected, setSelected] = useState<MarketSelected | null>(null);
  return (
    <Grid container justifyContent={"center"} gap={2}>
      <LayoutGroup>
        <AnimatePresence>
          {isLoad && <LoaderSkeleton />}
          {!isLoad &&
            markets.map((i, k) => (
              <Card
                key={k}
                layoutId={`id_${i.id}_${i.name}`}
                onClick={() =>
                  setSelected({ layoutId: `id_${i.id}_${i.name}`, ...i })
                }
              >
                <strong style={{ color: "white" }}>{i.name}</strong>
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
