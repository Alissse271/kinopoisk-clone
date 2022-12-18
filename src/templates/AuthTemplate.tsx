import { Outlet } from "react-router-dom";

export const AuthTemplate = () => {
  return (
    <div>
      <header>Header</header>
      <Outlet />
    </div>
  );
};
