import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledButton = styled.button<{ primary?: boolean; secondary?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 16px 0;

  ${Typography.S3}

  background: ${({ primary, secondary }) =>
    primary ? `${Color.PRIMARY}` : secondary ? `${Color.SECONDARY}` : "red"};
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background: ${Color.PRIMARY_LIGHT};
  }
  &:disabled {
    color: ${Color.LIGHT};
    background: ${Color.SECONDARY};
  }
`;

export { StyledButton };
