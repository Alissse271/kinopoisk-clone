import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { toggleTheme, useAppDispatch, useAppSelector } from "./store";

export const App = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", darkMode);
  }, [darkMode]);
  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <RouterProvider router={Router} />
      <button type="button" onClick={handleClick}>
        Toggle theme
      </button>
    </>
  );
};
