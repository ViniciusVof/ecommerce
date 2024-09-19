import { Wrapper } from "./styles";
import products from "../../mocks/productsBlockContent.json";
import { ProductCard } from "../ProductCard";

export function ProductCarousel() {
  return (
    <Wrapper>
      {products.map(({ title, image, price, oldPrice }) => (
        <ProductCard
          title={title}
          image={image}
          price={price}
          oldPrice={oldPrice}
        />
      ))}
    </Wrapper>
  );
}
