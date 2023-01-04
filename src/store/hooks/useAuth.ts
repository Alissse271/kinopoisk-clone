import { useAppSelector } from "./hooks";

export const useAuth = () => {
  const { email, id, userName } = useAppSelector((state) => state.user);
  return {
    isAuth: !!email,
    userName,
    email,
    id,
  };
};
