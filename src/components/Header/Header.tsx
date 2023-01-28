import { FiltersMark, LogoIcon } from "assets";
import { HeaderAccount } from "components";
import { useWindowSize } from "hooks";
import { memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { deleteValues, resetSearchMovies, updateTitle, useAppDispatch } from "store";
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
  const { width = 0 } = useWindowSize();
  const { register, handleSubmit, reset } = useForm<FilterValue>();

  const onSubmit: SubmitHandler<FilterValue> = (info) => {
    dispatch(resetSearchMovies());
    dispatch(deleteValues());
    dispatch(updateTitle(info.s));
    reset();
    navigate(ROUTE.SEARCH);
  };

  const handleOpenFilters = () => {
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
          <StyledInput type="text" placeholder="Search" {...register("s")} />
        </StyledForm>
        <FiltersButton onClick={handleOpenFilters}>
          <FiltersMark />
        </FiltersButton>
      </InputContainer>
      {width >= 1440 && <HeaderAccount />}
    </StyledHeader>
  );
});
