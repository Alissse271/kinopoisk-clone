import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import {
  HomePage,
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
        <Route path={ROUTE.FAVORITES} />
        <Route path={ROUTE.TRENDS} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
        <Route path={ROUTE.MOVIE} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
      <Route path={ROUTE.SIGN_IN} element={<AuthTemplate />}>
        <Route index element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
    </>,
  ),
  { basename: "/kinopoisk-clone" },
);
