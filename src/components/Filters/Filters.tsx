import { AsyncThunkAction, Dispatch, AnyAction } from "@reduxjs/toolkit";
import { Close } from "assets";
import { Button, Portal, PortalTarget } from "components";
import { TitleMedium } from "components/TitleMedium/TitleMedium";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchMoviesBySearch, useAppDispatch } from "store";
import { IMovieAPI } from "types";
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

interface IFormValues {
  searchValue: string;
}

export const Filters = () => {
  const [isOpenModal, toggleModal] = useState(true);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, getValues, reset } = useForm<IFormValues>();

  const handleReset = () => {
    reset();
  };

  const onSubmit: SubmitHandler<IFormValues> = () => {
    const searchValue = getValues("searchValue");
    dispatch(fetchMoviesBySearch(searchValue));
    reset();
  };

  const handleCloseFilters = () => {
    toggleModal((isOpenModal) => !isOpenModal);
  };

  return (
    <Portal target={PortalTarget.FILTERS}>
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
    </Portal>
  );
};
