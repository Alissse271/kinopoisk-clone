import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { MovieCard, Slide, TitleMedium } from "components";
import { SliderLeftArrow, SliderRightArrow } from "assets";
import {
  Header,
  Arrows,
  PreviousButton,
  NextButton,
  Container,
  StyledSwiper,
  StyledSlide,
} from "./styles";
import { getAllMovies, useAppSelector } from "store";
import { useWindowSize } from "hooks";

export const Slider = () => {
  const { movies } = useAppSelector(getAllMovies);
  const { width = 0 } = useWindowSize();
  const getSlidesAmount = () => {
    if (width <= 768) {
      return 1;
    } else if (width >= 768) {
      return 2;
    } else if (width >= 1920) {
      return 3;
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
        {movies.map((movie) => {
          return (
            <StyledSlide>
              <Container>
                <Slide key={movie.id} movie={movie} />
              </Container>
            </StyledSlide>
          );
        })}
      </StyledSwiper>
    </>
  );
};
