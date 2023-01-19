import styled from "styled-components";
import { Color, inputStyles, Media, Typography } from "ui";

const FormContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 574px;
  width: 100%;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(2, auto);

  width: 100%;

  margin: 0 24px;

  ${Media.XS} {
    grid-row-gap: 32px;
    padding: 24px;
  }
  ${Media.SM} {
    grid-row-gap: 40px;
    padding: 40px;
  }

  background: ${Color.GREY_THEME};
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, auto);
  grid-row-gap: 8px;
`;

const StyledLabel = styled.label`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 8px;

  ${Typography.S3}
  color: ${Color.DARK_THEME};
`;

const StyledInput = styled.input`
  ${inputStyles}
`;

const InfoMessage = styled.span`
  ${Typography.S5}
  color: ${Color.DARK_THEME};
`;
const ErrorMessage = styled.span`
  ${Typography.S5}
  color: ${Color.ERROR};
`;

export {
  FormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  Container,
  ErrorMessage,
  InfoMessage,
};
