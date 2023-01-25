import { useEffect } from "react";
import { getTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { CustomSwitch, StyledFormControlLabel } from "./styles";

export const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(getTheme);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <StyledFormControlLabel
      value="start"
      control={<CustomSwitch />}
      label=""
      onChange={handleChangeTheme}
    />
  );
};
