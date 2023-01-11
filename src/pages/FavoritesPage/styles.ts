import { TitleMain } from "components";
import styled from "styled-components";
import { Typography, Color, Media } from "ui";

const EmptyFavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const EmptyText = styled.p`
  margin-top: 24px;
  ${Media.LG} {
    margin-top: 32px;
  }
  ${Typography.H3};
  color: ${Color.DARK_THEME};
`;
const StyledTitle = styled(TitleMain)`
  align-self: flex-start;
  margin-bottom: 32px;
  ${Media.LG} {
    margin-bottom: 0;
  }
`;

export { EmptyText, EmptyFavoritesContainer, StyledTitle };
