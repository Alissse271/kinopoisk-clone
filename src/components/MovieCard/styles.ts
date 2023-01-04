import { Badge } from "components/Badge/Badge";
import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const Card = styled.div`
  position: relative;
  max-width: 272px;
`;
const StyledBadge = styled(Badge)`
  position: absolute;
  left: 20px;
  top: 20px;
`;
const ImageContainer = styled.div`
  height: 400px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 10px;
`;
const Name = styled.p`
  padding-top: 20px;

  ${Media.SM} {
    padding-top: 24px;
  }
  ${Typography.S2}
`;
const List = styled.ul<{ $isMobile: boolean }>`
  display: inline-grid;

  grid-template-columns: ${({ $isMobile }) => ($isMobile ? "repeat(2, auto)" : "repeat(3, auto)")};
`;
const ListItem = styled.li<{ $isMobile: boolean }>`
  position: relative;

  margin-right: 1.5rem;

  ${Typography.S5};
  color: ${Color.LIGHT};
  list-style: none;

  ${({ $isMobile }) => ($isMobile ? "&:nth-child(even)" : "&:not(:nth-child(3n + 1))")}:before {
    content: "";
    position: absolute;
    left: -1rem;
    top: calc(50% - 0.125rem);
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${Color.LIGHT};
    border-radius: 50%;
  }
`;

export { Name, Card, StyledBadge, List, ListItem, Image, ImageContainer };
