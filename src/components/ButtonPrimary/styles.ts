import styled from "styled-components";
import { Color, Typography } from "../../ui";

const StyledButton = styled.button`
  width: 100%;

  padding: 16px 0;

  ${Typography.S3}

  background: ${Color.PRIMARY};
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
