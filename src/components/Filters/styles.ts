import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, inputStyles, Media, Typography } from "ui";

const StyledFilters = styled(motion.form)`
  position: fixed;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  padding: 32px 24px;

  background-color: ${Color.MURK_THEME};
  z-index: 11;

  ${Media.LG} {
    width: 518px;
    padding: 48px 40px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;

  ${Media.LG} {
    margin-bottom: 48px;
  }
`;
const CloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;
const FiltersContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 20px;
  flex-grow: 1;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 8px;
`;
const Subtitle = styled.p`
  ${Typography.S3}
  color: ${Color.DARK_THEME};
`;
const StyledInput = styled.input`
  width: 100%;

  ${inputStyles};

  &:focus-visible {
    outline-width: 0px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;
const Buttons = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 16px;

  margin-top: 40px;

  ${Media.LG} {
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 0;
    grid-template-rows: min-content;
    grid-column-gap: 32px;

    margin-top: 55px;

    & button:nth-of-type(1) {
      order: 2;
    }
  }
  ${Media.XXXXL} {
    grid-column-gap: 40px;
  }
`;
const ErrorMessage = styled.span`
  ${Typography.S5}
  color: ${Color.ERROR};
`;

export {
  StyledFilters,
  TitleContainer,
  CloseButton,
  Subtitle,
  Container,
  StyledInput,
  FiltersContainer,
  Buttons,
  ErrorMessage,
};
