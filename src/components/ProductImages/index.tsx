import { useState } from "react";
import { SwiperClass } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  ActiveProductImageContainer,
  ActiveProductImageSlide,
  ActiveProductImageWrapper,
  ThumbsSlide,
  ThumbsWrapper,
  Wrapper,
} from "./styles";
import { SlideButton } from "@components/SlideButton";

interface IProductImages {
  images: {
    id: number;
    url: string;
    order: number;
  }[];
}

export default function ProductImages({ images }: IProductImages) {
  const [activeProductImage, setActiveProductImage] = useState<SwiperClass>();

  return (
    <Wrapper>
      <ThumbsWrapper
        onSwiper={setActiveProductImage}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        direction={"vertical"}
        className="thumbImage"
      >
        {images
          .sort((a, b) => a.order - b.order)
          .map(({ url }) => (
            <ThumbsSlide>
              <img src={url} />
            </ThumbsSlide>
          ))}
      </ThumbsWrapper>

      <ActiveProductImageWrapper>
        <SlideButton />
        <ActiveProductImageContainer
          loop={true}
          spaceBetween={10}
          thumbs={{
            swiper:
              activeProductImage && !activeProductImage.destroyed
                ? activeProductImage
                : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="activeImage"
          navigation={{
            nextEl: ".nextSlideButton",
            prevEl: ".previousSlideButton",
          }}
        >
          {images
            .sort((a, b) => a.order - b.order)
            .map(({ url }) => (
              <ActiveProductImageSlide>
                <img src={url} />
              </ActiveProductImageSlide>
            ))}
        </ActiveProductImageContainer>
      </ActiveProductImageWrapper>
    </Wrapper>
  );
}
