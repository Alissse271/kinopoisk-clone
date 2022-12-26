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
import { useAppDispatch } from "store";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "store/auth/authSlice";
import { ROUTE } from "router";
import { useNavigate } from "react-router-dom";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = ({ email, password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          }),
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    reset();
    navigate(`${ROUTE.HOME}`);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
