import { FiltersMark, LogoIcon } from "assets";
import { HeaderAccount } from "components";
import { useDebounce, useWindowSize } from "hooks";
import { memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchMoviesBySearch, useAppDispatch } from "store";
import { FilterValue } from "types";

import { Color } from "ui";
import { StyledForm, StyledHeader, StyledInput, FiltersButton, InputContainer } from "./styles";

interface IProps {
  className?: string;
  toggleModal: (value: boolean) => void;
}

export const Header = memo(({ className, toggleModal }: IProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const debouncedValue = useDebounce(searchValue, 500);
  const { width = 0 } = useWindowSize();
  const { register, handleSubmit, reset } = useForm<FilterValue>();

  const onSubmit: SubmitHandler<FilterValue> = (info) => {
    dispatch(fetchMoviesBySearch(info));
    reset();
  };

  const handleOpenFilters = () => {
    navigate(ROUTE.HOME);
    toggleModal(true);
  };

  return (
    <StyledHeader className={className}>
      {width < 1440 && width >= 768 && (
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={Color.DARK_THEME} />
        </Link>
      )}
      <InputContainer>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="text"
            placeholder="Search"
            onClick={() => navigate(ROUTE.HOME)}
            {...register("s")}
          />
        </StyledForm>
        <FiltersButton onClick={handleOpenFilters}>
          <FiltersMark />
        </FiltersButton>
      </InputContainer>
      {width >= 1440 && <HeaderAccount />}
    </StyledHeader>
  );
});
