import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

export const ActiveProductImageWrapper = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
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
    z-index: 3;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;

export const ActiveProductImageContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export const ActiveProductImageSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

export const ThumbsWrapper = styled(Swiper)`
  margin: 0;
  width: 20%;
  box-sizing: border-box;

  .swiper-slide-thumb-active {
    opacity: 1;
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const ThumbsSlide = styled(SwiperSlide)`
  border: 1px solid ${(props) => props.theme.white};

  &:hover {
    border: 1px solid ${(props) => props.theme.primary};
    box-shadow: 0px 6px 13px 0px rgba(0, 0, 0, 0.05);
  }

  border-radius: 8px;
  width: 100%;
  height: 100%;
  opacity: 0.4;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;
