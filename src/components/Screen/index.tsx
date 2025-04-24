import { Container } from "./styled";

export default function Screen({ onClick }: { onClick: () => void }) {
  return (
    <Container
      onClick={onClick}
      initial={{ filter: "blur(0px)" }}
      animate={{ filter: "blur(15px)" }}
      exit={{ filter: "blur(0px)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      key="overlay"
    />
  );
}
