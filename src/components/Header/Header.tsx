import { FiltersMark, LogoIcon } from "assets";
import { Filters, HeaderAccount } from "components";
import { useDebounce, useWindowSize } from "hooks";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchMoviesBySearch, useAppDispatch } from "store";

import { Color } from "ui";
import { StyledForm, StyledHeader, StyledInput, FiltersButton } from "./styles";

interface IProps {
  className?: string;
}
interface IFormValues {
  searchValue: string;
}

export const Header = ({ className }: IProps) => {
  const [isOpenModal, toggleModal] = useState(false);
  const navigate = useNavigate();
  // const debouncedValue = useDebounce(searchValue, 500);
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const { register, handleSubmit, getValues, reset } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = () => {
    const searchValue = getValues("searchValue");
    dispatch(fetchMoviesBySearch(searchValue));
    // navigate(ROUTE.HOME);
    reset();
  };
  const handleOpenFilters = () => {
    toggleModal((isOpenModal) => !isOpenModal);
  };
  return (
    <StyledHeader className={className}>
      {width < 1440 && width >= 768 && (
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={Color.DARK_THEME} />
        </Link>
      )}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledInput type="text" placeholder="Search" {...register("searchValue")} />
        <FiltersButton onClick={handleOpenFilters}>
          <FiltersMark />
        </FiltersButton>
      </StyledForm>
      {width >= 1440 && <HeaderAccount />}
      {isOpenModal && <Filters />}
    </StyledHeader>
  );
};
