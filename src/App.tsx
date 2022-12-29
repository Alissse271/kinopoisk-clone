import { RouterProvider } from "react-router-dom";
import { Router } from "router";
import { movieAPI } from "services/movieAPI";

export const App = () => {
  console.log(movieAPI.getMoviesByTitle());
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};
