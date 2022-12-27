import { FormControlLabel } from "@mui/material";
import styled from "styled-components";
import { Color } from "ui";

const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    color: Color.DARK_THEME,
  },
});

export { StyledFormControlLabel };
