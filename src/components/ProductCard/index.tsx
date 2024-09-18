import { formatMoney } from "../../utils/formatMoney";
import {
  ProductDiscount,
  ProductImage,
  ProductImageContainer,
  ProductInformations,
  ProductPrice,
  ProductTitle,
  Wrapper,
} from "./styles";

interface IProductCards {
  title: string;
  image: string;
  price: number;
  oldPrice: number;
}

export function ProductCard({ title, image, price, oldPrice }: IProductCards) {
  return (
    <Wrapper>
      <ProductImageContainer>
        <ProductImage src={image} />
      </ProductImageContainer>
      <ProductInformations>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          {formatMoney(price)} <span>{formatMoney(oldPrice)}</span>
        </ProductPrice>
        <ProductDiscount>
          Economize - {formatMoney(oldPrice - price)}
        </ProductDiscount>
      </ProductInformations>
    </Wrapper>
  );
}
