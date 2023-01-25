import { memo } from "react";
import BarLoader from "react-spinners/BarLoader";
import { Color } from "ui";

interface IProps {
  loading: boolean;
  className?: string;
}

export const Loader = memo(({ loading, className }: IProps) => {
  return (
    <BarLoader
      className={className}
      color={Color.PRIMARY}
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
});
