import { ProductCardContainer, Wrapper } from "./styles";
import products from "@mocks/productsBlockContent.json";
import { ProductCard } from "@components/ProductCard";

import { Pagination } from "swiper/modules";

export function ProductCarousel() {
  return (
    <Wrapper
      slidesPerView={5}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {products.map(({ title, image, price, oldPrice }, index) => (
        <ProductCardContainer key={index}>
          <ProductCard
            title={title}
            image={image}
            price={price}
            oldPrice={oldPrice}
          />
        </ProductCardContainer>
      ))}
    </Wrapper>
  );
}
