import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography } from "ui";

const UserInfo = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-column-gap: 20px;
  align-items: center;

  min-width: 260px;
`;
const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: min-content auto min-content;
  grid-column-gap: 20px;
  align-items: center;

  min-width: 260px;

  text-decoration: none;
`;
const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 56px;

  padding: 16px 0;

  background-color: ${Color.PRIMARY};
  border-radius: 10px;
`;
const SingInText = styled.span`
  ${Typography.S2}
`;
const UserInitials = styled.span`
  ${Typography.S3}
`;
const UserName = styled.span`
  ${Typography.S2}
`;
const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

const DetailsContainer = styled.div`
  position: absolute;
  top: 100%;

  min-width: 260px;

  margin-top: 24px;

  border-radius: 10px;
  background-color: ${Color.LIGHT_THEME};
  z-index: 3;
`;
const EditProfileButton = styled(Link)`
  display: block;

  width: 100%;

  padding: 15px 20px;

  ${Typography.S5};
  text-align: left;
  text-decoration: none;
  color: ${Color.WHITE};

  background-color: ${Color.MURK_THEME};
  border-radius: 10px 10px 0 0;
  cursor: pointer;
`;
const LogOutButton = styled.button`
  width: 100%;

  margin-top: 1px;
  padding: 15px 20px;

  ${Typography.S5};
  text-align: left;
  color: ${Color.PRIMARY};

  background-color: ${Color.MURK_THEME};
  border-radius: 0 0 10px 10px;
  cursor: pointer;
`;
export {
  UserInfo,
  StyledLink,
  BadgeContainer,
  SingInText,
  UserInitials,
  StyledButton,
  UserName,
  DetailsContainer,
  EditProfileButton,
  LogOutButton,
};
