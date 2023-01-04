import { User, RightArrow } from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { useAuth } from "store/hooks/useAuth";
import { StyledLink, BadgeContainer, SingInText, UserInitials } from "./styles";

export const HeaderAccount = () => {
  const { isAuth, userName } = useAuth();
  return (
    <div>
      {isAuth ? (
        <div>
          <BadgeContainer>
            <UserInitials>
              {userName &&
                userName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()}
            </UserInitials>
          </BadgeContainer>
        </div>
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
