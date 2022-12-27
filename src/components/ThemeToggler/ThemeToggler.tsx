import { useEffect } from "react";
import { setTheme, toggleTheme, useAppDispatch, useAppSelector } from "store";
import { StyledSwitch } from "components/Switch/Switch";
import { StyledFormControlLabel } from "./styles";

export const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(setTheme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <StyledFormControlLabel
      value="start"
      control={<StyledSwitch />}
      label={theme === "light" ? "Dark" : "Light"}
      onChange={handleChangeTheme}
    />
  );
};
