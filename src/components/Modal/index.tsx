import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ModalProps {
  layoutId: string;
  renderContent: ReactNode;
  onClick: () => void;
}

export default function Modal({
  layoutId,
  onClick,
  renderContent,
}: ModalProps) {
  return (
    <motion.div
      id={layoutId}
      onClick={onClick}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        justifySelf: "center",
        alignContent: "center",
      }}
    >
      <Grid
        container
        size={{
          lg: 4,
          md: 6,
          sm: 9,
          xs: 10,
        }}
      >
        <motion.div
          layoutId={layoutId}
          style={{
            width: "100%",
            height: "65vh",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            background: "#1E1E1E",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {renderContent}
        </motion.div>
      </Grid>
    </motion.div>
  );
}
