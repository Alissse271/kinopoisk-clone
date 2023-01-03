import styled from "styled-components";
import { Typography } from "ui";
import { IMDB } from "assets";

const StyledBadge = styled.span<{ color: string }>`
  padding: 8px;
  ${Typography.S3};
  background-color: ${(p) => p.color};
  border-radius: 6px;
`;
const StyledIcon = styled(IMDB)`
  padding-right: 10px;
`;

export { StyledBadge, StyledIcon };
