import styled from "styled-components";
import background from "../../assets/images/background.jpg";
import backgroundBlackout from "../../assets/images/background-blackout.svg";
import logo from "../../assets/icons/logo.svg";
import { Color, Media, Typography } from "../../ui";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  ${Media.XS} {
    background: url(${logo}) center 48px no-repeat, url(${backgroundBlackout}) left top no-repeat,
      url(${background}) left top no-repeat;
  }

  ${Media.SM} {
    background: url(${logo}) 40px 47px no-repeat, url(${backgroundBlackout}) left top no-repeat,
      url(${background}) left top no-repeat;
  }
  ${Media.LG} {
    background: url(${logo}) 62px 48px no-repeat, url(${backgroundBlackout}) left top no-repeat,
      url(${background}) left top no-repeat;
  }
`;

const TextRights = styled.p`
  ${Typography.B1}
  color: ${Color.WHITE};
`;

export { Container, TextRights };
