import styled from "styled-components";
import { Color, Media, Typography } from "ui";

const Card = styled.div`
  max-width: 272px;
`;
const Image = styled.img`
  width: 100%;
`;
const Name = styled.p`
  padding-top: 20px;

  ${Media.SM} {
    padding-top: 24px;
  }
  ${Typography.S2}
`;
const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
`;
const ListItem = styled.li`
  ${Typography.S5};
  color: ${Color.LIGHT};
  &:first-child {
    list-style: none;
  }
`;

export { Name, Card, List, ListItem, Image };
