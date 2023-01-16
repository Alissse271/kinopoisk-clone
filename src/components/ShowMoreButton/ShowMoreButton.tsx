import { StyledButton, StyledShowMoreLoader } from "./styles";

interface IProps {
  onClick: () => void;
  isLoadingMoreMovies: boolean;
  className?: string;
}

export const ShowMoreButton = ({ onClick, isLoadingMoreMovies, className }: IProps) => {
  return (
    <StyledButton className={className} type="button" onClick={onClick}>
      Show More
      {isLoadingMoreMovies && <StyledShowMoreLoader loading={isLoadingMoreMovies} />}
    </StyledButton>
  );
};
