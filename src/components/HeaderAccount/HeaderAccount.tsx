import { User, RightArrow, DownArrow } from "assets";
import { useOnClickOutside, useToggle } from "hooks";
import { useRef, useState } from "react";
import { ROUTE } from "router";
import { getLogOutUser, getUserInfo, useAppDispatch, useAppSelector } from "store";
import { AccountPortal } from "components";
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
  const { isAuth } = useAppSelector(getUserInfo);
  const [isOpen, setOpen] = useToggle(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAccountPortal = () => {
    setOpen();
  };

  const handleLogOutUser = () => {
    dispatch(getLogOutUser());
    navigate(ROUTE.HOME);
  };

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handleAccountPortal);

  const users = JSON.parse(localStorage.getItem("userInfo")!);
  return (
    <>
      {isAuth ? (
        <UserInfo>
          <BadgeContainer>
            <UserInitials>
              {users !== null &&
                users.map((user: any) =>
                  user.name
                    .split(" ")
                    .map((name: string) => name[0])
                    .join("")
                    .toUpperCase(),
                )}
            </UserInitials>
          </BadgeContainer>
          <UserName>{users !== null && users.map((user: any) => user.name)}</UserName>
          <StyledButton onClick={handleAccountPortal}>
            <DownArrow />
          </StyledButton>
          {isOpen && (
            // <AccountPortal />
            <DetailsContainer ref={ref} onClick={handleAccountPortal}>
              <EditProfileButton to={ROUTE.SETTINGS}>Edit profile</EditProfileButton>
              <LogOutButton onClick={handleLogOutUser}>Log Out</LogOutButton>
            </DetailsContainer>
          )}
        </UserInfo>
      ) : (
        <StyledLink to={ROUTE.SIGN_IN}>
          <BadgeContainer>
            <User />
          </BadgeContainer>
          <SingInText>Sign In</SingInText>
          <RightArrow />
        </StyledLink>
      )}
    </>
  );
};
