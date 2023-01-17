import { Button, ColorMode, TitleMedium } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  StyledAccountInfo,
  AccountContainer,
  Container,
  Title,
  UserInfoContainer,
  UserInfo,
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
} from "./styles";

interface IFormValues {
  userName: string;
  email: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const SettingsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IFormValues>();

  const users = JSON.parse(localStorage.getItem("userInfo")!);

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {};

  return (
    <StyledSettingsForm onSubmit={handleSubmit(onSubmit)}>
      <SettingsBlock>
        <StyledAccountInfo>
          <TitleMedium label="Profile" />
          <AccountContainer>
            <Container>
              <Title>Name</Title>
              <UserInfoContainer>
                <UserInfo>{users !== null && users.map((user: any) => user.name)}</UserInfo>
              </UserInfoContainer>
            </Container>
            <Container>
              <Title>Email</Title>
              <UserInfoContainer>
                <UserInfo>{users !== null && users.map((user: any) => user.email)}</UserInfo>
              </UserInfoContainer>
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
                {...register("password", {
                  required: "*password is required",
                  minLength: {
                    value: 8,
                    message: "*min 8 characters",
                  },
                })}
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </PasswordContainer>
            <NewPasswordContainer>
              <SubTitle>New password</SubTitle>
              <StyledInput
                type="password"
                placeholder="New password"
                {...register("newPassword", {
                  required: "*new password is required",
                  minLength: {
                    value: 8,
                    message: "*min 8 characters",
                  },
                })}
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
              <SubTitle>Confirm password</SubTitle>
              <StyledInput
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", { required: true })}
              />
              {watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
                <ErrorMessage>*password not match</ErrorMessage>
              ) : null}
            </NewPasswordContainer>
          </PasswordSettingsContainer>
        </StyledPasswordSettings>
        <ColorMode />
      </SettingsBlock>
      <Buttons>
        <Button primary type="submit" label="Save" />
        <Button secondary type="button" label="Cancel" />
      </Buttons>
    </StyledSettingsForm>
  );
};
