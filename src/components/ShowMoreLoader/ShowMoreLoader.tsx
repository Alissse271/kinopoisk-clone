import ClipLoader from "react-spinners/ClipLoader";
import { Color } from "ui";

interface IProps {
  loading: boolean;
  className?: string;
}

export const ShowMoreLoader = ({ loading, className }: IProps) => {
  return (
    <ClipLoader
      className={className}
      color={Color.PRIMARY}
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
      size={20}
    />
  );
};
