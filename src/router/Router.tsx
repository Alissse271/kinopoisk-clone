import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import { HomePage, NotFoundPage } from "../pages";
import { AuthTemplate, MainTemplate } from "../templates";
import { ROUTE } from "./routes";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.FAVORITES} />
        <Route path={ROUTE.TRENDS} />
        <Route path={ROUTE.SETTINGS} />
        <Route path={ROUTE.MOVIE} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
      <Route element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} />
        <Route path={ROUTE.SIGN_UP} />
        <Route path={ROUTE.RESET_PASSWORD} />
      </Route>
    </>,
  ),
);
