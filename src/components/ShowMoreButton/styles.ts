import { ShowMoreLoader } from "components/ShowMoreLoader/ShowMoreLoader";
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

  &:disabled {
    color: ${Color.LIGHT};
    background: ${Color.SECONDARY};
  }
`;
const StyledShowMoreLoader = styled(ShowMoreLoader)`
  margin-left: 12px;
`;

export { StyledButton, StyledShowMoreLoader };
