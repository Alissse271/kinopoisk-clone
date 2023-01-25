import { SubmitHandler, useForm } from "react-hook-form";
import { Button, TitleMedium } from "components";
import {
  FormContainer,
  StyledForm,
  InputsContainer,
  Container,
  StyledLabel,
  StyledInput,
  ErrorMessage,
  StyledText,
  LinkSignUp,
} from "./styles";
import { getUserInfo, signUpUser, useAppDispatch, useAppSelector } from "store";
import { ROUTE } from "router";
import { useNavigate } from "react-router-dom";
import { emailValidation, nameValidation, passwordValidation } from "utils";
import { useState } from "react";
import { IUserInfo } from "types";

interface IFormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getUserInfo);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    const userInfoToSave: IUserInfo = {
      name: userInfo.userName,
      email: userInfo.email,
      isAuth: true,
    };
    dispatch(signUpUser(userInfo))
      .unwrap()
      .then(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
        navigate(ROUTE.HOME);
        reset();
      })
      .catch((error) => {
        setErrorMessage(error);
      });
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleMedium label="Sign Up" />
        <InputsContainer>
          <Container>
            <StyledLabel>
              Name
              <StyledInput
                type="name"
                placeholder="Your name"
                {...register("userName", nameValidation())}
              />
            </StyledLabel>
            {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
          </Container>
          <Container>
            <StyledLabel>
              Email
              <StyledInput
                type="text"
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
          </Container>
          <Container>
            <StyledLabel>
              Confirm password
              <StyledInput
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", { required: true })}
              />
            </StyledLabel>
            {watch("confirmPassword") !== watch("password") && getValues("confirmPassword") ? (
              <ErrorMessage>*password not match</ErrorMessage>
            ) : null}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </Container>
        </InputsContainer>
        <Button primary type="submit" label="Sign up" loader={isLoading} />
        <StyledText>
          Already have an account? <LinkSignUp to={"../"}>Sign In</LinkSignUp>
        </StyledText>
      </StyledForm>
    </FormContainer>
  );
};
