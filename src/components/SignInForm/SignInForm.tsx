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
import { signInUser, useAppDispatch } from "store";
import { useNavigate } from "react-router-dom";

interface IFormValues {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    dispatch(signInUser(userInfo))
      .then(() => {
        navigate(`${ROUTE.HOME}`);
        reset();
      })
      .catch(() => {
        alert("ERROR");
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
                type="text"
                placeholder="Your email"
                {...register("email", {
                  required: "*email is required",
                  pattern: { value: /^(.+)@(.+)$/, message: "Enter a valid email" },
                  maxLength: {
                    value: 30,
                    message: "*max 30 characters",
                  },
                })}
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
                {...register("password", {
                  required: "*password is required",
                  minLength: {
                    value: 8,
                    message: "*min 8 characters",
                  },
                })}
              />
            </StyledLabel>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <StyledLink to={ROUTE.RESET_PASSWORD}>Forgot password?</StyledLink>
          </Container>
        </InputsContainer>
        <Button primary type="submit" label="Sign in" />
        <StyledText>
          Don’t have an account? <LinkSignUp to={ROUTE.SIGN_UP}>Sign Up</LinkSignUp>
        </StyledText>
      </StyledForm>
    </FormContainer>
  );
};
