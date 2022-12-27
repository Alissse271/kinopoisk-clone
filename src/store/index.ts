import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setTheme } from "./selectors/themeSelector";
import { store } from "./store";
import { toggleTheme } from "./theme/themeSlice";

export { useAppSelector, useAppDispatch, store, toggleTheme, setTheme };
