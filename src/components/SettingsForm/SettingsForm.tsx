import { Button, ColorMode, SettingsModal, TitleMedium } from "components";
import { useToggle } from "hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import {
  getUserInfo,
  updateUserEmail,
  updateUserName,
  updateUserPassword,
  useAppDispatch,
  useAppSelector,
} from "store";
import { IUserInfo } from "types";
import { emailValidation, nameValidation, settingsPasswordValidation } from "utils";
import {
  StyledAccountInfo,
  AccountContainer,
  Container,
  Title,
  StyledPasswordSettings,
  PasswordSettingsContainer,
  PasswordContainer,
  NewPasswordContainer,
  SubTitle,
  StyledInput,
  ErrorMessage,
  Buttons,
  SettingsBlock,
  StyledSettingsForm,
  NewPassword,
} from "./styles";

interface IFormValues {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const SettingsForm = () => {
  const [isOpen, toggleModal] = useToggle(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name, email, password } = useAppSelector(getUserInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    resetField,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    dispatch(updateUserName(userInfo.userName));
    dispatch(updateUserEmail(userInfo))
      .unwrap()
      .then(() => {
        dispatch(updateUserPassword(userInfo));
        const userInfoToSave: IUserInfo = {
          name: userInfo.userName,
          email: userInfo.email,
          isAuth: true,
        };
        localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
        toggleModal();
        setTimeout(() => {
          toggleModal();
        }, 2500);
      })
      .finally(() => {
        resetField("newPassword");
        resetField("confirmPassword");
      });
  };

  const handleNavigateHome = () => {
    navigate(ROUTE.HOME);
  };

  return (
    <>
      <StyledSettingsForm onSubmit={handleSubmit(onSubmit)}>
        <SettingsBlock>
          <StyledAccountInfo>
            <TitleMedium label="Profile" />
            <AccountContainer>
              <Container>
                <Title>Name</Title>
                <StyledInput
                  type="text"
                  placeholder="Your name"
                  defaultValue={name ? name : "User name"}
                  {...register("userName", nameValidation())}
                />
              </Container>
              <Container>
                <Title>Email</Title>
                <StyledInput
                  type="text"
                  placeholder="Your email"
                  defaultValue={email ? email : "User email"}
                  {...register("email", emailValidation())}
                />
              </Container>
            </AccountContainer>
          </StyledAccountInfo>
          <StyledPasswordSettings>
            <TitleMedium label="Password" />
            <PasswordSettingsContainer>
              <PasswordContainer>
                <SubTitle>Password</SubTitle>
                <StyledInput
                  type="password"
                  placeholder="Your password"
                  defaultValue={password ? password : "User password"}
                  {...register("password", settingsPasswordValidation())}
                />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              </PasswordContainer>
              <NewPasswordContainer>
                <NewPassword>
                  <SubTitle>New password</SubTitle>
                  <StyledInput
                    type="password"
                    placeholder="New password"
                    {...register("newPassword", settingsPasswordValidation())}
                  />
                  {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </NewPassword>
                <NewPassword>
                  <SubTitle>Confirm password</SubTitle>
                  <StyledInput
                    type="password"
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                  />
                  {watch("confirmPassword") !== watch("newPassword") &&
                  getValues("confirmPassword") ? (
                    <ErrorMessage>*password not match</ErrorMessage>
                  ) : null}
                </NewPassword>
              </NewPasswordContainer>
            </PasswordSettingsContainer>
          </StyledPasswordSettings>
          <ColorMode />
        </SettingsBlock>
        <Buttons>
          <Button primary type="submit" label="Save" />
          <Button secondary type="button" label="Cancel" onClick={handleNavigateHome} />
        </Buttons>
      </StyledSettingsForm>
      <SettingsModal toggleModal={toggleModal} isOpen={isOpen} />
    </>
  );
};
