import styled from "styled-components";
import { Color, inputStyles, Media, Typography } from "ui";

const StyledAccountInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 16px;
`;
const AccountContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 20px;

  padding: 24px;

  background-color: ${Color.MURK_THEME};
  border-radius: 10px;

  ${Media.LG} {
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 32px;
    grid-row-gap: 0;
    padding: 40px;
  }
  ${Media.XXXXL} {
    grid-column-gap: 40px;
  }
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 8px;
`;
const Title = styled.p`
  ${Typography.B1};
`;
const StyledPasswordSettings = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 16px;
`;
const PasswordSettingsContainer = styled.div`
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
  display: grid;
  grid-row-gap: 20px;
  ${Media.LG} {
    grid-row-gap: 24px;
  }
`;
const NewPassword = styled.div``;
const SubTitle = styled.p`
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
const Buttons = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 16px;

  ${Media.LG} {
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 0;
    grid-template-rows: min-content;
    grid-column-gap: 32px;

    & button:nth-of-type(1) {
      order: 2;
    }
  }
  ${Media.XXXXL} {
    grid-column-gap: 40px;
    justify-self: flex-end;
    width: 50%;
  }
`;
const SettingsBlock = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-row-gap: 32px;
`;
const StyledSettingsForm = styled.form`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-row-gap: 40px;
  ${Media.LG} {
    grid-row-gap: 48px;
  }
`;

export {
  StyledAccountInfo,
  AccountContainer,
  Container,
  Title,
  StyledPasswordSettings,
  PasswordSettingsContainer,
  PasswordContainer,
  NewPasswordContainer,
  NewPassword,
  SubTitle,
  StyledInput,
  ErrorMessage,
  Buttons,
  SettingsBlock,
  StyledSettingsForm,
};
