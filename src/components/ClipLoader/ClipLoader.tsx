import { Color } from "ui";
import { StyledClipLoader } from "./styles";

interface IProps {
  loading: boolean;
  className?: string;
}

export const ClipLoader = ({ loading, className }: IProps) => {
  return (
    <StyledClipLoader
      className={className}
      color={Color.WHITE}
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
      size={20}
    />
  );
};
