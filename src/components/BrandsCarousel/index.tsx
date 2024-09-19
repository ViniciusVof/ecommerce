import brands from "@mocks/brands.json";
import { BrandContainer, Wrapper } from "./styles";

import { Pagination } from "swiper/modules";

export function BrandsCarousel() {
  return (
    <Wrapper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {brands.map(({ id, imageURL }) => (
        <BrandContainer key={id}>
          <img src={imageURL} />
        </BrandContainer>
      ))}
    </Wrapper>
  );
}
