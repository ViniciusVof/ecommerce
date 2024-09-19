import { SlideContainer, Slider, Wrapper } from "./styles";
import slides from "@mocks/slides.json";
import { ReactSVG } from "react-svg";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import NextSlideSVG from "@assets/nextSlide.svg";
import PreviousSVG from "@assets/previousSlide.svg";

export function SlideCarousel() {
  return (
    <Wrapper>
      <button className="nextSlideButton">
        <ReactSVG src={NextSlideSVG} />
      </button>
      <button className="previousSlideButton">
        <ReactSVG src={PreviousSVG} />
      </button>
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
