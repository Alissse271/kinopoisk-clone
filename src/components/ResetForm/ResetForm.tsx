import { Button, TitleMedium } from "components";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { getUserInfo, resetUserPassword, useAppDispatch, useAppSelector } from "store";
import { emailValidation } from "utils";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  Container,
  ErrorMessage,
  InfoMessage,
} from "./styles";

interface IFormValues {
  email: string;
}

export const ResetForm = () => {
  const [isMessageShown, setIsMessageShown] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(getUserInfo);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IFormValues>();

  const email = getValues("email");

  const onSubmit: SubmitHandler<IFormValues> = (email) => {
    dispatch(resetUserPassword(email))
      .then(() => {
        setIsMessageShown((isMessageShown) => !isMessageShown);
      })
      .catch(() => {
        alert("ERROR");
        reset();
      });
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleMedium label="Reset password" />
        <Container>
          {isMessageShown && (
            <InfoMessage>
              You will receive an email {email} with a link to reset your password!
            </InfoMessage>
          )}
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
        <Button primary type="submit" label="Reset" loader={isLoading} />
      </StyledForm>
    </FormContainer>
  );
};
