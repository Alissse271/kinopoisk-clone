import { ClipLoader } from "components";
import { memo } from "react";
import { StyledButton } from "./styles";

interface IProps {
  onClick: () => void;
  isLoadingMoreMovies: boolean;
  className?: string;
}

export const ShowMoreButton = memo(({ onClick, isLoadingMoreMovies, className }: IProps) => {
  return (
    <StyledButton className={className} type="button" onClick={onClick}>
      Show More
      {isLoadingMoreMovies && <ClipLoader loading={isLoadingMoreMovies} />}
    </StyledButton>
  );
});
