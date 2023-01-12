import { TitleMedium } from "components";
import { useForm } from "react-hook-form";
import {
  Container,
  ErrorMessage,
  NewPasswordContainer,
  PasswordContainer,
  StyledInput,
  StyledPasswordSettings,
  Title,
} from "./styles";

interface IFormValues {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export const PasswordSettings = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IFormValues>();
  return (
    <StyledPasswordSettings>
      <TitleMedium label="Password" />
      <Container>
        <PasswordContainer>
          <Title>Password</Title>
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
          <Title>New password</Title>
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
          <Title>Confirm password</Title>
          <StyledInput
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword", { required: true })}
          />
          {watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
            <ErrorMessage>*password not match</ErrorMessage>
          ) : null}
        </NewPasswordContainer>
      </Container>
    </StyledPasswordSettings>
  );
};
