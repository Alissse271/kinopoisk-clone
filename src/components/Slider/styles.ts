import styled from "styled-components";
import { Color, Media } from "ui";
import { Swiper, SwiperSlide } from "swiper/react";

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 40px;
  margin-bottom: 32px;
  ${Media.LG} {
    margin-top: 48px;
  }
  ${Media.XXXXL} {
    margin-top: 56px;
  }
`;
const StyledSwiper = styled(Swiper)`
  max-width: min-content;
  width: 100%;
`;
const StyledSlide = styled(SwiperSlide)`
  width: auto !important;
`;
const Container = styled.div`
  /* max-width: 272px;
  width: 100%; */
`;
const Arrows = styled.div`
  display: flex;
  align-items: flex-end;
`;
const PreviousButton = styled.button`
  margin-right: 16px;
  background-color: transparent;
  path {
    stroke: ${Color.DARK_THEME};
  }

  cursor: pointer;
`;
const NextButton = styled.button`
  background-color: transparent;
  path {
    stroke: ${Color.DARK_THEME};
  }
  cursor: pointer;
`;

export { Header, Arrows, PreviousButton, NextButton, Container, StyledSwiper, StyledSlide };
