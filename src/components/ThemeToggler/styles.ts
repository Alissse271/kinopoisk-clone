import { FormControlLabel } from "@mui/material";
import styled from "styled-components";
import { Color } from "ui";
import { Switch } from "@mui/material";

const StyledFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    marginRight: 0,
    color: Color.DARK_THEME,
  },
  "& .MuiFormControlLabel-root": {
    marginRight: 0,
  },
});

const CustomSwitch = styled(Switch)({
  "& .MuiSwitch-thumb": {
    marginTop: 3,
    marginLeft: 4,
    width: 16,
    height: 16,
    boxSizing: "border-box",
  },
  "& .MuiButtonBase.Mui-checked": {
    background: Color.SECONDARY,
  },
  "& .MuiSwitch-track": {
    marginTop: -2,
    width: 32,
    height: 20,
    borderRadius: 10,
    backgroundColor: Color.SECONDARY,
  },
  "& .MuiSwitch-switchBase.Mui-checked": {
    transform: "translateX(14px)",
    color: Color.WHITE,
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: Color.PRIMARY,
    "&:hover": {
      backgroundColor: Color.PRIMARY,
    },
  },
});

export { StyledFormControlLabel, CustomSwitch };
