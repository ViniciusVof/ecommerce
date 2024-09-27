import { ProductCardContainer, Wrapper } from "./styles";
import featuredProducts from "@mocks/productsBlockContent.json";
import products from "@mocks/products.json";
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
      {featuredProducts.map(({ productId }, index) => {
        const product =
          products.find((product) => product.id === productId) || null;

        return (
          <ProductCardContainer key={index}>
            {product && (
              <ProductCard
                title={product?.title}
                image={product?.images[0].url}
                price={product?.price}
                oldPrice={product?.oldPrice}
              />
            )}
          </ProductCardContainer>
        );
      })}
    </Wrapper>
  );
}
