import BarLoader from "react-spinners/BarLoader";
import { Color } from "ui";

interface IProps {
  loading: boolean;
}

export const Loader = ({ loading }: IProps) => {
  return (
    <BarLoader
      color={Color.PRIMARY}
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
