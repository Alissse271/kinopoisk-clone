import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography } from "ui";

const DetailsContainer = styled.div`
  min-width: 260px;
  margin-top: 24px;
  border-radius: 10px;
  background-color: ${Color.GRAPHITE};
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
  background-color: ${Color.DARK};
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
  background-color: ${Color.DARK};
  border-radius: 0 0 10px 10px;
  cursor: pointer;
`;

export { DetailsContainer, EditProfileButton, LogOutButton };
