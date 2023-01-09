import { Portal, PortalTarget } from "components";
import { ROUTE } from "router";
import { DetailsContainer, EditProfileButton, LogOutButton } from "./styles";

export const AccountPortal = () => {
  return (
    <Portal target={PortalTarget.ACCOUNT}>
      <DetailsContainer>
        <EditProfileButton to={ROUTE.SETTINGS}>Edit profile</EditProfileButton>
        <LogOutButton>Log Out</LogOutButton>
      </DetailsContainer>
    </Portal>
  );
};
