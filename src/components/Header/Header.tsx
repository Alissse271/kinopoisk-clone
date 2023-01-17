import { FiltersMark, LogoIcon } from "assets";
import { HeaderAccount } from "components";
import { useDebounce, useWindowSize } from "hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { fetchMoviesBySearch, useAppDispatch } from "store";

import { Color } from "ui";
import { StyledForm, StyledHeader, StyledInput, FiltersButton, InputContainer } from "./styles";

interface IProps {
  className?: string;
  toggleModal: (value: boolean) => void;
}
interface IFormValues {
  searchValue: string;
}

export const Header = ({ className, toggleModal }: IProps) => {
  const navigate = useNavigate();
  // const debouncedValue = useDebounce(searchValue, 500);
  const dispatch = useAppDispatch();
  const { width = 0 } = useWindowSize();
  const { register, handleSubmit, getValues, reset } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = () => {
    const searchValue = getValues("searchValue");
    dispatch(fetchMoviesBySearch(searchValue));
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
            {...register("searchValue")}
          />
        </StyledForm>
        <FiltersButton onClick={handleOpenFilters}>
          <FiltersMark />
        </FiltersButton>
      </InputContainer>
      {width >= 1440 && <HeaderAccount />}
    </StyledHeader>
  );
};
