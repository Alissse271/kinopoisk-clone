import styled from "styled-components";
import { Color, inputStyles, Media, Typography } from "ui";

const StyledPasswordSettings = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 16px;
`;
const Container = styled.form`
  display: flex;
  flex-direction: column;

  padding: 24px;

  background-color: ${Color.MURK_THEME};
  border-radius: 10px;

  ${Media.LG} {
    flex-direction: row;
    padding: 40px;
  }
`;
const PasswordContainer = styled.div`
  ${Media.LG} {
    width: 50%;
    margin-right: 32px;
  }
  ${Media.XXXXL} {
    margin-right: 40px;
  }
  padding-bottom: 20px;
`;
const NewPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${Media.LG} {
    width: 50%;
  }
`;
const Title = styled.p`
  ${Typography.B1};
  padding-bottom: 8px;
`;
const ErrorMessage = styled.span`
  ${Typography.S5}
  color: ${Color.ERROR};
`;

const StyledInput = styled.input`
  width: 100%;
  ${inputStyles};
`;

export {
  StyledPasswordSettings,
  Container,
  PasswordContainer,
  NewPasswordContainer,
  Title,
  StyledInput,
  ErrorMessage,
};
