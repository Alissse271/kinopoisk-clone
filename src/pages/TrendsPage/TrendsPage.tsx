import { Loader, MovieList } from "components";
import { useWindowSize } from "hooks";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch, getTrends } from "store";
import { fetchTrends } from "store/features/trends/trendsSlice";
import { Container, StyledTitle, ErrorText } from "./styles";

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
      {isLoading && <Loader loading={isLoading} />}
      {error && <ErrorText>Error</ErrorText>}
      {trends && trends.length > 0 && <MovieList isTrends movies={trends} />}
    </Container>
  );
};
