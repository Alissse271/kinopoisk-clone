import { StyledButton, StyledShowMoreLoader } from "./styles";

interface IProps {
  onClick: () => void;
  $isLoading: boolean;
}

export const ShowMoreButton = ({ onClick, $isLoading }: IProps) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Show More
      {$isLoading && <StyledShowMoreLoader loading={$isLoading} />}
    </StyledButton>
  );
};
