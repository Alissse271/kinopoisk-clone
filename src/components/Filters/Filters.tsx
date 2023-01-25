import { Close } from "assets";
import { Button } from "components";
import { TitleMedium } from "components/TitleMedium/TitleMedium";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";
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
  isOpen: boolean;
}

export const Filters = memo(({ toggleModal, isOpen }: IProps) => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterValue>();

  const handleReset = () => {
    reset();
  };

  const onSubmit: SubmitHandler<FilterValue> = (info) => {
    dispatch(fetchMoviesBySearch(info)).unwrap();
    toggleModal(false);
    reset();
  };

  const handleCloseFilters = () => {
    toggleModal(false);
    reset();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledFilters
          onSubmit={handleSubmit(onSubmit)}
          animate={{ x: 0 }}
          initial={{ x: "100%" }}
          transition={{ duration: 0.7 }}
          exit={{ x: "100%" }}
        >
          <TitleContainer>
            <TitleMedium label="Filters" />
            <CloseButton type="button" onClick={handleCloseFilters}>
              <Close />
            </CloseButton>
          </TitleContainer>
          <FiltersContainer>
            <Container>
              <Subtitle>Full or short movie name</Subtitle>
              <StyledInput
                type="text"
                placeholder="Your text"
                {...register("s", titleValidation())}
              />
              {errors.s && <ErrorMessage>{errors.s.message}</ErrorMessage>}
            </Container>
            <Container>
              <Subtitle>Year</Subtitle>
              <StyledInput type="number" placeholder="Year" {...register("y", yearValidation())} />
              {errors.y && <ErrorMessage>{errors.y.message}</ErrorMessage>}
            </Container>
          </FiltersContainer>
          <Buttons>
            <Button primary type="submit" label="Show results" />
            <Button secondary type="button" label="Clear filter" onClick={handleReset} />
          </Buttons>
        </StyledFilters>
      )}
    </AnimatePresence>
  );
});
