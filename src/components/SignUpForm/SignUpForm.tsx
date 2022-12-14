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
import { signUpUser, useAppDispatch } from "store";
import { ROUTE } from "router";
import { useNavigate } from "react-router-dom";

interface IFormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface IUserInfo {
  name: string;
  email: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    getValues,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (userInfo) => {
    const userInfoToSave: IUserInfo[] = [
      {
        name: userInfo.userName,
        email: userInfo.email,
      },
    ];
    dispatch(signUpUser(userInfo))
      .then(() => {
        navigate(ROUTE.HOME);
        reset();
      })
      .then(() => {
        localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
      })
      .catch(() => {
        alert("ERROR");
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
                {...register("userName", {
                  required: "*name is required",
                  pattern: { value: /^[a-zA-ZА-ЯЁа-яё\s]*$/, message: "Enter a valid name" },
                  maxLength: {
                    value: 15,
                    message: "*max 15 characters",
                  },
                })}
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
            {/* {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )} */}
          </Container>
        </InputsContainer>
        <Button primary type="submit" label="Sign up" />
        <StyledText>
          Already have an account? <LinkSignUp to={"../"}>Sign In</LinkSignUp>
        </StyledText>
      </StyledForm>
    </FormContainer>
  );
};
