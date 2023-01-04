import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledHeaderAccount = styled.div`
  width: 150px;
  height: 56px;

  background-color: blue;
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
  ${Typography.S2}
`;
export { StyledHeaderAccount, StyledLink, BadgeContainer, SingInText, UserInitials };
