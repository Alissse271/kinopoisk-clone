import { StyledSwitch, ThemeToggler } from "components";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "router";
import { toggleTheme, useAppDispatch, useAppSelector } from "store";

export const App = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <RouterProvider router={Router} />
      <button type="button" onClick={handleClick}>
        Toggle theme
      </button>
      {/* <ThemeToggler /> */}
    </>
  );
};
