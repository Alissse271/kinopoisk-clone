import { SubmitHandler, useForm } from "react-hook-form";
import { Button, TitleMedium } from "components";
import { ROUTE } from "router";
import {
  Container,
  ErrorMessage,
  InputsContainer,
  StyledForm,
  StyledLabel,
  FormContainer,
  StyledInput,
  StyledText,
  StyledLink,
  LinkSignUp,
} from "./styles";
import { getUserInfo, signInUser, useAppDispatch, useAppSelector } from "store";
import { useNavigate } from "react-router-dom";
import { emailValidation, passwordValidation } from "utils";
import { useState } from "react";

interface IFormValues {
  email: string;
  password: string;
}
export const SignInForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getUserInfo);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const userInfoToSave = JSON.parse(localStorage.getItem("userInfo")!);
  if (userInfoToSave) {
    userInfoToSave.isAuth = true;
  }

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    setErrorMessage(null);
    dispatch(signInUser(userInfo))
      .unwrap()
      .then(() => {
        localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
        navigate(`${ROUTE.HOME}`);
      })
      .catch((error) => {
        setErrorMessage(error);
        reset();
      });
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleMedium label="Sign In" />
        <InputsContainer>
          <Container>
            <StyledLabel>
              Email
              <StyledInput
                type="email"
                placeholder="Your email"
                {...register("email", emailValidation())}
              />
            </StyledLabel>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </Container>
          <Container>
            <StyledLabel>
              Password
              <StyledInput
                type="password"
                placeholder="Your password"
                {...register("password", passwordValidation())}
              />
            </StyledLabel>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <StyledLink to={ROUTE.RESET_PASSWORD}>Forgot password?</StyledLink>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </Container>
        </InputsContainer>
        <Button primary type="submit" label="Sign in" loader={isLoading} />
        <StyledText>
          Don’t have an account? <LinkSignUp to={ROUTE.SIGN_UP}>Sign Up</LinkSignUp>
        </StyledText>
      </StyledForm>
    </FormContainer>
  );
};
