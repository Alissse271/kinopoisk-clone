import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Slide, TitleMedium } from "components";
import { SliderLeftArrow, SliderRightArrow } from "assets";
import { Header, Arrows, PreviousButton, NextButton, StyledSwiper } from "./styles";
import { getAllMovies, useAppSelector } from "store";
import { useWindowSize } from "hooks";

export const Slider = () => {
  const { movies } = useAppSelector(getAllMovies);
  const { width = 0 } = useWindowSize();

  const getSlidesAmount = () => {
    if (width <= 568) {
      return 1;
    } else if (width >= 1920) {
      return 4;
    } else if (width >= 568) {
      return 2;
    }
  };
  return (
    <>
      <Header>
        <TitleMedium label="Recommendations" />
        <Arrows>
          <PreviousButton className="prev_btn">
            <SliderLeftArrow />
          </PreviousButton>
          <NextButton className="next_btn">
            <SliderRightArrow />
          </NextButton>
        </Arrows>
      </Header>
      <StyledSwiper
        modules={[Navigation]}
        freeMode={true}
        centeredSlides={false}
        spaceBetween={32}
        slidesPerView={getSlidesAmount()}
        navigation={{ nextEl: ".next_btn", prevEl: ".prev_btn" }}
      >
        {movies.map((movie, index) => {
          return (
            <SwiperSlide key={`${movie.id}-${index}`}>
              <Slide movie={movie} />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </>
  );
};
