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
const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;
const StyledInput = styled.input`
  width: 100%;
  ${inputStyles}
`;
const FiltersButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  background-color: transparent;
  cursor: pointer;
`;

export { StyledHeader, StyledForm, StyledInput, FiltersButton, InputContainer };
