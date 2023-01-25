import { IUserInfo } from "types";

export const getUserFromLocalStorage = (email: string) => {
  const users: IUserInfo[] = JSON.parse(localStorage.getItem("userInfo") || "[]");
  return users.find((user) => user.email === email);
};
