import { Close } from "assets";
import { Button } from "components";
import { TitleMedium } from "components/TitleMedium/TitleMedium";
import { AnimatePresence } from "framer-motion";
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

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

export const Filters = ({ toggleModal, isOpen }: IProps) => {
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
    dispatch(fetchMoviesBySearch(info)).unwrap();
    toggleModal(false);
    reset();
  };

  const handleCloseFilters = () => {
    toggleModal(false);
    reset();
  };
  const currentVariant = isOpen ? "open" : "closed";
  return (
    <AnimatePresence>
      <StyledFilters
        onSubmit={handleSubmit(onSubmit)}
        animate={currentVariant}
        variants={menuVariants}
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
    </AnimatePresence>
  );
};
