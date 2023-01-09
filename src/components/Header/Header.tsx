import { LogoIcon } from "assets";
import { HeaderAccount } from "components";
import { useWindowSize } from "hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { fetchMoviesBySearch, getMoviesBySearch, useAppDispatch, useAppSelector } from "store";

import { Color } from "ui";
import { StyledForm, StyledHeader, StyledInput } from "./styles";

interface IProps {
  className?: string;
}
interface IFormValues {
  searchValue: string;
}

export const Header = ({ className }: IProps) => {
  // const debouncedValue = useDebounce(search.value, 500);
  const { movies } = useAppSelector(getMoviesBySearch);
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
            // pattern: { value: /^(.+)@(.+)$/, message: "Enter a valid email" },
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
