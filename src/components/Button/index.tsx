import { Container, Indicator, Wrapper } from "./styled";
import { ButtonProps } from "./types";

export default function Button({ title, indicator, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      <Wrapper>
        <span>{title}</span>
        {indicator && (
          <Indicator
            layoutId="underline"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </Wrapper>
    </Container>
  );
}
