import styled from "styled-components";

import { inputStyles, Media } from "ui";

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content;
  align-items: center;
  grid-row-gap: 32px;

  padding-bottom: 40px;

  ${Media.LG} {
    grid-template-columns: min-content auto;
    grid-column-gap: 78px;
    padding-bottom: 0;
  }
  ${Media.XXXL} {
    grid-template-columns: auto min-content;
    grid-column-gap: 42px;
  }
`;
const StyledForm = styled.form`
  width: auto;
`;
const StyledInput = styled.input`
  width: 100%;
  ${inputStyles}
`;

export { StyledHeader, StyledForm, StyledInput };
