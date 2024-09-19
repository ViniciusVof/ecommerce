import { CollectionCard } from "@components/CollectionCard";

import collections from "@mocks/collections.json";
import { CollectionCardContainer, Wrapper } from "./styles";
import { Pagination } from "swiper/modules";

export function CollectionCarousel() {
  return (
    <Wrapper
      slidesPerView={7}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {collections.map(({ title, image }, index) => (
        <CollectionCardContainer key={index}>
          <CollectionCard title={title} image={image} />
        </CollectionCardContainer>
      ))}
    </Wrapper>
  );
}
