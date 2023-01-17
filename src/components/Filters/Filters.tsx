import { Close } from "assets";
import { Button } from "components";
import { TitleMedium } from "components/TitleMedium/TitleMedium";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchMoviesBySearch, useAppDispatch } from "store";
import {
  StyledFilters,
  TitleContainer,
  CloseButton,
  Subtitle,
  Container,
  StyledInput,
  FiltersContainer,
  YearsContainer,
  Buttons,
} from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

interface IFormValues {
  searchValue: string;
}

export const Filters = ({ toggleModal }: IProps) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, getValues, reset } = useForm<IFormValues>();

  const handleReset = () => {
    reset();
  };

  const onSubmit: SubmitHandler<IFormValues> = () => {
    const searchValue = getValues("searchValue");
    dispatch(fetchMoviesBySearch(searchValue));
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
          <StyledInput type="text" placeholder="Your text" {...register("searchValue")} />
        </Container>
        <Container>
          <Subtitle>Years</Subtitle>
          <YearsContainer>
            <StyledInput type="number" placeholder="From" />
            <StyledInput type="number" placeholder="To" />
          </YearsContainer>
        </Container>
      </FiltersContainer>
      <Buttons>
        <Button primary type="submit" label="Show results" />
        <Button secondary type="button" label="Clear filter" onClick={handleReset} />
      </Buttons>
    </StyledFilters>
  );
};
