import { LogoIcon } from "assets";
import { HeaderAccount } from "components";
import { useDebounce, useWindowSize } from "hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { fetchMoviesBySearch, useAppDispatch } from "store";

import { Color } from "ui";
import { StyledForm, StyledHeader, StyledInput } from "./styles";

interface IProps {
  className?: string;
}
interface IFormValues {
  searchValue: string;
}

export const Header = ({ className }: IProps) => {
  // const debouncedValue = useDebounce(searchValue, 500);
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = () => {
    const searchValue = getValues("searchValue");
    console.log(searchValue);
    dispatch(fetchMoviesBySearch(searchValue));
    reset();
  };
  return (
    <StyledHeader className={className}>
      {width < 1440 && width >= 768 && (
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={Color.DARK_THEME} />
        </Link>
      )}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput
          type="text"
          placeholder="Search"
          {...register("searchValue", {
            required: "*email is required",
            maxLength: {
              value: 30,
              message: "*max 30 characters",
            },
          })}
        />
      </StyledForm>

      {width >= 1440 && <HeaderAccount />}
    </StyledHeader>
  );
};
