import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import { Router } from "./router";
import { toggleTheme, useAppDispatch, useAppSelector } from "./store";
import { Color, Typography } from "./ui";

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
      <Container>
        <Title>Test!!!!!!</Title>
        <button type="button" onClick={handleClick}>
          Toggle theme
        </button>
      </Container>
    </>
  );
};
const Container = styled.div`
  background-color: ${Color.WHITE_THEME};
`;
const Title = styled.h1`
  ${Typography.H1}
`;
