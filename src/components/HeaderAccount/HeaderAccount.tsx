import { User, RightArrow, DownArrow } from "assets";
import { useOnClickOutside, useToggle } from "hooks";
import { useRef, useState } from "react";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";
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

export const HeaderAccount = () => {
  // const [openLink, setOpenLink] = useState(false);
  const { isAuth, name } = useAppSelector(getUserInfo);
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleAccountPortal = () => {
    // setOpen();
    setOpen((isOpen) => !isOpen);
  };
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, handleAccountPortal);
  // const handleClose = () => setOpenLink(!openLink);
  return (
    <div>
      {isAuth ? (
        <UserInfo>
          <BadgeContainer>
            <UserInitials>
              {name &&
                name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
            </UserInitials>
          </BadgeContainer>
          <UserName>{name}</UserName>
          <StyledButton onClick={handleAccountPortal}>
            <DownArrow />
          </StyledButton>
          {isOpen && (
            // <AccountPortal />
            <DetailsContainer ref={ref} onClick={handleAccountPortal}>
              <EditProfileButton to={ROUTE.SETTINGS}>Edit profile</EditProfileButton>
              <LogOutButton>Log Out</LogOutButton>
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
    </div>
  );
};
