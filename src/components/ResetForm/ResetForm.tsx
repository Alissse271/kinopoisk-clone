import { Button, TitleMedium } from "components";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  StyledLabel,
  Container,
  ErrorMessage,
} from "./styles";

interface IFormValues {
  email: string;
}

export const ResetForm = () => {
  // const [isShown, setIsShown] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  return (
    <FormContainer>
      <StyledForm>
        <TitleMedium label="Reset password" />
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
        <Button primary type="submit" label="Reset" />
      </StyledForm>
    </FormContainer>
  );
};
