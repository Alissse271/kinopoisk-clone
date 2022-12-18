import { Outlet } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";
import { Color } from "../ui";

export const MainTemplate = () => {
  return (
    <div>
      <header>
        <LogoIcon fill={Color.WHITE_THEME} />
      </header>
      <Outlet />
    </div>
  );
};
