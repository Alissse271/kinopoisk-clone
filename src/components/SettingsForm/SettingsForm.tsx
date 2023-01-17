import { Button, ColorMode, TitleMedium } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { getUserInfo, useAppSelector } from "store";
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
  const { name, email, error, password } = useAppSelector(getUserInfo);

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
              <StyledInput
                type="text"
                placeholder="Your name"
                defaultValue={name ? name : "User name"}
                {...register("userName", {
                  required: "*name is required",
                  maxLength: {
                    value: 50,
                    message: "*max 50 characters",
                  },
                })}
              />
            </Container>
            <Container>
              <Title>Email</Title>
              <StyledInput
                type="text"
                placeholder="Your email"
                defaultValue={email ? email : "User email"}
                {...register("email", {
                  required: "*email is required",
                  maxLength: {
                    value: 50,
                    message: "*max 50 characters",
                  },
                })}
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
              <NewPassword>
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
              </NewPassword>
              <NewPassword>
                <SubTitle>Confirm password</SubTitle>
                <StyledInput
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword", { required: true })}
                />
                {watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
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
        <Button secondary type="button" label="Cancel" />
      </Buttons>
    </StyledSettingsForm>
  );
};
