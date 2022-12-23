import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, TitleMedium } from "../../components";
import { ROUTE } from "../../router";
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

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  // const navigate = useNavigate();
  // const handleSignIn = () => {
  //   navigate("../" + ROUTE.SIGN_IN);
  // };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();
  return (
    <FormContainer>
      <StyledForm>
        <TitleMedium label={"Sign Up"} />
        <InputsContainer>
          <Container>
            <StyledLabel>
              Name
              <StyledInput
                type={"name"}
                placeholder={"Your name"}
                {...register("name", {
                  required: "*name is required",
                  pattern: { value: /^[a-zA-ZА-ЯЁа-яё\s]*$/, message: "Enter a valid name" },
                  maxLength: {
                    value: 15,
                    message: "*max 15 characters",
                  },
                })}
              />
            </StyledLabel>
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </Container>
          <Container>
            <StyledLabel>
              Email
              <StyledInput
                type={"text"}
                placeholder={"Your email"}
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
                type={"password"}
                placeholder={"Your password"}
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
          </Container>
          <Container>
            <StyledLabel>
              Confirm password
              <StyledInput
                type={"password"}
                placeholder={"Confirm password"}
                {...register("confirmPassword", {
                  required: "*password is incorrect",
                  minLength: {
                    value: 8,
                    message: "*min 8 characters",
                  },
                })}
              />
            </StyledLabel>
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </Container>
        </InputsContainer>
        <Button primary type={"submit"} label={"Sign up"} />
        <StyledText>
          Already have an account? <LinkSignUp to={"../"}>Sign In</LinkSignUp>
        </StyledText>
      </StyledForm>
    </FormContainer>
  );
};
