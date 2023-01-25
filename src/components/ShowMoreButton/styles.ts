import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;

  ${Typography.S5};
  color: ${Color.WHITE};

  background: ${Color.GRAPHITE};
  border-radius: 40px;

  cursor: pointer;

  &:hover {
    box-shadow: ${Color.SECONDARY_THEME} 0px 22px 70px 4px;
  }

  &:disabled {
    color: ${Color.LIGHT};
    background: ${Color.SECONDARY};
  }
`;

export { StyledButton };
