import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import {
  FavoritesPage,
  HomePage,
  MovieInfoPage,
  NotFoundPage,
  ResetPasswordPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
} from "pages";
import { AuthTemplate, MainTemplate } from "templates";
import { ROUTE } from "./routes";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.TRENDS} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTE.MOVIE_INFO} element={<MovieInfoPage />} />
      </Route>
      <Route path={ROUTE.SIGN_IN} element={<AuthTemplate />}>
        <Route index element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </>,
  ),
  { basename: "/kinopoisk-clone" },
);
