import { SettingsForm } from "components";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppSelector, getUserInfo } from "store";

export const SettingsPage = () => {
  const { isAuth } = useAppSelector(getUserInfo);
  return isAuth ? <SettingsForm /> : <Navigate to={ROUTE.HOME + ROUTE.SIGN_IN} />;
};
