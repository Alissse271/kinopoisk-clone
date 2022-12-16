import { css } from "styled-components";
import { Color } from "./colors";
import { Media } from "./media";

const H1 = css`
  font-weight: 600;
  line-height: 1.5;
  color: ${Color.DARK_THEME};
  ${Media.XS} {
    font-size: 28px;
  }
  ${Media.MD} {
    font-size: 32px;
  }
  ${Media.LG} {
    font-size: 40px;
  }
`;

const H2 = css`
  font-weight: 600;
  line-height: 1.5;
  color: ${Color.DARK_THEME};
  ${Media.XS} {
    font-size: 24px;
  }
  ${Media.LG} {
    font-size: 20px;
  }
`;

const H3 = css`
  font-weight: 600;
  line-height: 1.6;
  color: ${Color.SECONDARY};
  ${Media.XS} {
    font-size: 20px;
  }
  ${Media.LG} {
    font-size: 18px;
  }
`;

const S1 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;
  color: ${Color.SECONDARY};
`;
const S2 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${Color.DARK_THEME};
`;
const S3 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: ${Color.LIGHT};
`;

const B1 = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${Color.DARK_THEME};
`;

export const Typography = { H1, H2, H3, S1, S2, S3, B1 };
