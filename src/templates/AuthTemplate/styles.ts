import { Link } from "react-router-dom";
import styled from "styled-components";
import background from "../../assets/images/background.jpg";

import { Color, Media, Typography } from "../../ui";

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  place-items: center;

  background: url(${background}) top center no-repeat;
  background-size: cover;
  min-height: 100vh;
`;

const StyledLink = styled(Link)`
  ${Media.XS} {
    margin-top: 32px;
  }

  ${Media.SM} {
    justify-self: start;

    margin-top: 48px;
    margin-left: 40px;
  }
  ${Media.LG} {
    margin-top: 48px;
    margin-left: 62px;
  }
`;

const Logo = styled.img``;

const TextRights = styled.p`
  ${Typography.B1}
  color: ${Color.WHITE};

  ${Media.XS} {
    padding-bottom: 48px;
  }
  ${Media.MD} {
    padding-bottom: 56px;
  }
  ${Media.LG} {
    padding-bottom: 64px;
  }
`;

export { Container, TextRights, StyledLink, Logo };
