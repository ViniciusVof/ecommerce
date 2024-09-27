import { formatMoney } from "@utils/formatMoney";
import {
  ProductDiscount,
  ProductDiscountFlag,
  ProductImage,
  ProductImageContainer,
  ProductInformations,
  ProductPrice,
  ProductTitle,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface IProductCards {
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  slug: string;
}

export function ProductCard({
  title,
  image,
  price,
  oldPrice,
  slug,
}: IProductCards) {
  const percentDiscount = oldPrice && ((price / oldPrice) * 100).toFixed(0);
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`product/${slug}`)}>
      {!!percentDiscount && (
        <ProductDiscountFlag>
          {percentDiscount}%
          <br />
          OFF
        </ProductDiscountFlag>
      )}

      <ProductImageContainer>
        <ProductImage
          src={image ?? import.meta.env.VITE_APP_PRODUCT_IMAGE_PLACEHOLDER}
          onError={(e) =>
            (e.currentTarget.src =
              import.meta.env.VITE_APP_PRODUCT_IMAGE_PLACEHOLDER)
          }
        />
      </ProductImageContainer>
      <ProductInformations>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>
          {formatMoney(price)}{" "}
          {oldPrice && <span>{formatMoney(oldPrice)}</span>}
        </ProductPrice>
        {oldPrice && (
          <ProductDiscount>
            Economize - {formatMoney(oldPrice - price)}
          </ProductDiscount>
        )}
      </ProductInformations>
    </Wrapper>
  );
}
