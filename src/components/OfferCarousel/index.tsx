import { OfferCard } from "@components/OfferCard";

import offers from "@mocks/offers.json";
import { OfferCardContainer, Wrapper } from "./styles";
import { Pagination } from "swiper/modules";

export function OfferCarousel() {
  return (
    <Wrapper
      slidesPerView={6}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {offers.map(({ category, title, image, slug }, index) => (
        <OfferCardContainer key={index}>
          <OfferCard
            title={title}
            image={image}
            category={category}
            slug={slug}
          />
        </OfferCardContainer>
      ))}
    </Wrapper>
  );
}
