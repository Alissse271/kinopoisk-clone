import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, inputStyles, Media, Typography } from "ui";

const FormContainer = styled.div`
  display: flex;
  align-items: center;

  max-width: 574px;
  width: 100%;
`;

const StyledForm = styled.form`
  width: 100%;

  margin: 0 24px;

  ${Media.XS} {
    padding: 24px;
  }
  ${Media.SM} {
    padding: 40px;
  }

  background: ${Color.GREY_THEME};
`;

const StyledLabel = styled.label`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 8px;

  ${Typography.S3}
  color: ${Color.DARK_THEME};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 24px;

  ${Media.XS} {
    margin: 32px 0;
  }
  ${Media.SM} {
    margin: 40px 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(auto, auto);
  grid-row-gap: 8px;
`;

const StyledInput = styled.input`
  ${inputStyles}
`;
const StyledText = styled.p`
  ${Typography.S6}
  text-align: center;

  ${Media.XS} {
    padding-top: 24px;
  }
  ${Media.MD} {
    padding-top: 32px;
  }
`;

const StyledLink = styled(Link)`
  ${Typography.S6}
  text-decoration: none;
`;

const LinkSignUp = styled(Link)`
  ${Typography.S6}
  text-decoration: none;
  color: ${Color.PRIMARY};
`;

const ErrorMessage = styled.span`
  ${Typography.S5}
  color: ${Color.ERROR};
`;
export {
  StyledForm,
  ErrorMessage,
  StyledInput,
  StyledLabel,
  InputsContainer,
  Container,
  FormContainer,
  StyledText,
  StyledLink,
  LinkSignUp,
};
