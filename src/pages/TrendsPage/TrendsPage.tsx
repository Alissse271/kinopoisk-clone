import { Loader, MovieList } from "components";
import { useWindowSize } from "hooks";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch, fetchMovies, getTrends } from "store";
import { fetchTrends } from "store/trends/trendsSlice";
import { Container, StyledTitle } from "./styles";

export const TrendsPage = () => {
  const { isLoading, trends, error } = useAppSelector(getTrends);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTrends());
  }, [dispatch]);
  const { width = 0 } = useWindowSize();
  return (
    <Container>
      {width < 1440 && <StyledTitle label="Trends" />}
      <Loader loading={isLoading} />
      {trends && trends.length > 0 && <MovieList trends movies={trends} />}
    </Container>
  );
};
