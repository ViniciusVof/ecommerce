import { formatMoney } from "@utils/formatMoney";
import {
  ProductOldPrice,
  ProductTitle,
  Wrapper,
  ProductPrice,
  ProductInstallments,
  Button,
  Separator,
  FieldsBlock,
} from "./styles";
import { ReactSVG } from "react-svg";

import CreditCardSVG from "@assets/creditCard.svg";
import { Select } from "@components/Select";
import { QuantitySelector } from "@components/QuantitySelector";
import { useState } from "react";
import { SingleValue } from "react-select";

interface IColorsVariants {
  label: string;
  value: string;
  stock: number;
}

interface IVariantsProducts {
  colors: IColorsVariants[];
}

interface IProductInformations {
  title: string;
  price: number;
  oldPrice: number;
  installments?: number;
  description: string;
  variants?: IVariantsProducts;
}

export function ProductInformations({
  title,
  price,
  oldPrice,
  installments,
  variants,
}: IProductInformations) {
  const [quantity, setQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState<IColorsVariants | null>(
    null
  );
  const installmentsWithoutTaxes =
    installments && formatMoney(price / installments);

  function handleSelectColor(newValue: SingleValue<IColorsVariants>) {
    setQuantity(1);
    setSelectedColor(newValue);
  }

  return (
    <Wrapper>
      <ProductTitle>{title}</ProductTitle>
      <ProductOldPrice>{formatMoney(oldPrice)}</ProductOldPrice>
      <ProductPrice>{formatMoney(price)}</ProductPrice>

      {installments && (
        <ProductInstallments>
          <ReactSVG src={CreditCardSVG} /> em até {installments}x de{" "}
          {installmentsWithoutTaxes} sem juros
        </ProductInstallments>
      )}

      <FieldsBlock>
        <Select
          name="color"
          label="Cor:"
          options={variants?.colors}
          placeholder="Selecione a cor"
          onChange={handleSelectColor}
          value={selectedColor}
        />

        <QuantitySelector
          name="quantity"
          label="Quantidade:"
          quantity={quantity}
          setQuantity={setQuantity}
          maxQuantity={selectedColor?.stock}
        />
      </FieldsBlock>

      <Separator />

      <Button title="Adicionar ao carrinho" />
    </Wrapper>
  );
}
