import { SlideButton } from "@components/SlideButton";
import { SlideContainer, Slider, Wrapper } from "./styles";
import slides from "@mocks/slides.json";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export function SlideCarousel() {
  return (
    <Wrapper>
      <SlideButton />
      <Slider
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".nextSlideButton",
          prevEl: ".previousSlideButton",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {slides.map(({ imageURL }, index) => (
          <SlideContainer key={index}>
            <img src={imageURL} />
          </SlideContainer>
        ))}
      </Slider>
    </Wrapper>
  );
}
