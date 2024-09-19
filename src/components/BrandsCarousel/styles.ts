import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const Wrapper = styled(Swiper)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding-bottom: 45px;
`;

export const BrandContainer = styled(SwiperSlide)`
  width: 389px;
  height: 207px;

  img {
    max-width: 100%;
  }
`;
