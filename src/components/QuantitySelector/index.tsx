import { Dispatch, SetStateAction } from "react";
import { Button, Container, VisorInput, Wrapper } from "./styles";

interface QuantitySelector {
  maxQuantity?: number;
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  label: string;
  name: string;
}

export function QuantitySelector({
  quantity,
  setQuantity,
  maxQuantity,
  label,
  name,
}: QuantitySelector) {
  function handleIncrement() {
    setQuantity((qnt) => qnt + 1);
  }

  function handleDecrement() {
    setQuantity((qnt) => qnt - 1);
  }

  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <Container>
        <Button onClick={handleDecrement} disabled={quantity < 1}>
          -
        </Button>
        <VisorInput value={quantity} readOnly />
        <Button
          onClick={handleIncrement}
          disabled={!!maxQuantity && quantity > maxQuantity}
        >
          +
        </Button>
      </Container>
    </Wrapper>
  );
}
