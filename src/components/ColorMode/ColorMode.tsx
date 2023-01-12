import { ThemeToggler, TitleMedium } from "components";
import { useAppSelector, getTheme } from "store";
import { CurrentTheme, Description, StyledColorMode, TextContainer, ThemeMode } from "./styles";

export const ColorMode = () => {
  const { theme } = useAppSelector(getTheme);

  return (
    <StyledColorMode>
      <TitleMedium label="Color mode" />
      <ThemeMode>
        <TextContainer>
          <CurrentTheme>{theme === "light" ? "Light" : "Dark"}</CurrentTheme>
          <Description>Use {theme === "light" ? "light" : "dark"} thema</Description>
        </TextContainer>
        <ThemeToggler />
      </ThemeMode>
    </StyledColorMode>
  );
};
