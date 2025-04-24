import { CardProps } from "./types";
import { Container } from "./styled";

export default function Card({ children, layoutId, onClick }: CardProps) {
  return (
    <Container
      onClick={onClick}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 0.95 }}
      layoutId={layoutId}
    >
      {children}
    </Container>
  );
}
