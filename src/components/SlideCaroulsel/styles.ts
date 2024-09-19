import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  .nextSlideButton {
    background-color: transparent;
    border: 0;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 2;
    transform: translate(50%, -50%);
    cursor: pointer;
  }

  .previousSlideButton {
    background-color: transparent;
    border: 0;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

export const Slider = styled(Swiper)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 16px;

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.white};
  }

  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.white};
  }
`;

export const SlideContainer = styled(SwiperSlide)`
  cursor: pointer;
`;
