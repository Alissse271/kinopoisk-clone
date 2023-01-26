import { UserIcon, RightArrow, DownArrow } from "assets";
import { useOnClickOutside, useToggle } from "hooks";
import { useRef } from "react";
import { ROUTE } from "router";
import { getLogOutUser, getUserInfo, useAppDispatch, useAppSelector } from "store";
import {
  StyledLink,
  BadgeContainer,
  SingInText,
  UserInitials,
  StyledButton,
  UserInfo,
  UserName,
  DetailsContainer,
  EditProfileButton,
  LogOutButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

export const HeaderAccount = () => {
  const { isAuth, name } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isOpen, setOpen] = useToggle(false);

  const handleAccount = () => {
    setOpen();
  };

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
  if (userInfo) {
    userInfo.isAuth = false;
  }

  const handleLogOutUser = () => {
    dispatch(getLogOutUser(false));
    localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate(ROUTE.HOME);
  };

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handleAccount);

  return isAuth ? (
    <UserInfo>
      <BadgeContainer>
        <UserInitials>
          {name && name.split("").length > 1
            ? name
                .split(" ")
                .map((name: string) => name[0])
                .join("")
                .toUpperCase()
            : name && name.split("").length === 1
            ? name[0].toUpperCase()
            : ""}
        </UserInitials>
      </BadgeContainer>
      <UserName>{name ? name : "User name"}</UserName>
      <StyledButton onClick={handleAccount}>
        <DownArrow />
      </StyledButton>
      {isOpen && (
        <DetailsContainer ref={ref} onClick={handleAccount}>
          <EditProfileButton to={ROUTE.SETTINGS}>Edit profile</EditProfileButton>
          <LogOutButton onClick={handleLogOutUser}>Log Out</LogOutButton>
        </DetailsContainer>
      )}
    </UserInfo>
  ) : (
    <StyledLink to={ROUTE.SIGN_IN}>
      <BadgeContainer>
        <UserIcon />
      </BadgeContainer>
      <SingInText>Sign In</SingInText>
      <RightArrow />
    </StyledLink>
  );
};
