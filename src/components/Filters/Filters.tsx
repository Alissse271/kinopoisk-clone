import { Close } from "assets";
import { Button } from "components";
import { TitleMedium } from "components/TitleMedium/TitleMedium";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchMoviesBySearch, useAppDispatch } from "store";
import { FilterValue } from "types";
import { titleValidation, yearValidation } from "utils";
import {
  StyledFilters,
  TitleContainer,
  CloseButton,
  Subtitle,
  Container,
  StyledInput,
  FiltersContainer,
  Buttons,
  ErrorMessage,
} from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

interface IFormValues {
  searchValue: string;
}

export const Filters = ({ toggleModal }: IProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FilterValue>();

  const handleReset = () => {
    reset();
  };

  const onSubmit: SubmitHandler<FilterValue> = (info) => {
    dispatch(fetchMoviesBySearch(info));
    toggleModal(false);
    reset();
  };

  const handleCloseFilters = () => {
    toggleModal(false);
    reset();
  };

  return (
    <StyledFilters onSubmit={handleSubmit(onSubmit)}>
      <TitleContainer>
        <TitleMedium label="Filters" />
        <CloseButton type="button" onClick={handleCloseFilters}>
          <Close />
        </CloseButton>
      </TitleContainer>
      <FiltersContainer>
        <Container>
          <Subtitle>Full or short movie name</Subtitle>
          <StyledInput type="text" placeholder="Your text" {...register("s", titleValidation())} />
          {errors.s && <ErrorMessage>{errors.s.message}</ErrorMessage>}
        </Container>
        <Container>
          <Subtitle>Years</Subtitle>
          <StyledInput type="number" placeholder="Year" {...register("y", yearValidation())} />
          {errors.y && <ErrorMessage>{errors.y.message}</ErrorMessage>}
        </Container>
      </FiltersContainer>
      <Buttons>
        <Button primary type="submit" label="Show results" />
        <Button secondary type="button" label="Clear filter" onClick={handleReset} />
      </Buttons>
    </StyledFilters>
  );
};
