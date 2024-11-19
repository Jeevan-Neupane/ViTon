import React, { useState } from "react";
import {
  Form,
  Heading,
  ImageDiv,
  InputWrapper,
  LeftDiv,
  LoginDiv,
  LoginLink,
  LoginText,
  OuterDiv,
  RightDiv,
  SignUpButton,
  Image,
  Text,
  TextDiv,
  ErrorMessage,
  LoadingDiv,
} from "./style";
import loginImg from "../../assets/banner/login.svg";
import InputField from "../inputfield/InputField";
import { useForm } from "react-hook-form";
import authService from "../../appwrite/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, removeCartError } from "../../store/store";
import Error from "../errors/Error";
import ButtonLoader from "../buttonLoader/ButtonLoading";
function LoginForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [signUpLoading, setSignUpLoading] = useState(false);
  const { errors } = useSelector((state) => state);

  const { cartError, timeOut } = errors;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm();

  const { email, password } = formState.errors;

  const onSubmit = async (data) => {
    try {
      setSignUpLoading(true);
      const user = await authService.login(data);
      if (user) {
        dispatch(login(user));
        navigate("/");
        location.reload();
      }
      setSignUpLoading(false);
    } catch (error) {
      setSignUpLoading(false);
      setErrorMessage(error.message);
    }
  };

  setTimeout(() => {
    dispatch(removeCartError());
  }, timeOut);

  return (
    <>
      {cartError && <Error error={cartError} />}
      <OuterDiv>
        <LeftDiv>
          <ImageDiv>
            <Image src={loginImg} />
          </ImageDiv>
          <TextDiv>
            <Text>Please Login </Text>
          </TextDiv>
        </LeftDiv>

        <RightDiv>
          <Heading>Login in Now</Heading>
          <Form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputWrapper>
              <InputField
                label='Email'
                placeholder='Enter Your Email'
                {...register("email", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Invalid One",
                  },
                })}
                type='email'
              />

              {email?.message && <ErrorMessage>*{email?.message}</ErrorMessage>}
            </InputWrapper>
            <InputWrapper>
              <InputField
                label='Password'
                placeholder='Enter Your Password'
                {...register("password", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                  pattern: {
                    value: /[@#!%^&*()]/,
                    message: "Must contain special symbol",
                  },
                })}
                type='password'
              />

              {password?.message && (
                <ErrorMessage>*{password?.message}</ErrorMessage>
              )}
            </InputWrapper>

            <SignUpButton
              disabled={signUpLoading}
              cursor={signUpLoading ? "change" : "no"}
            >
              {signUpLoading ? <ButtonLoader /> : "Login"}
            </SignUpButton>
            {errorMessage && <ErrorMessage>*{errorMessage}</ErrorMessage>}
          </Form>

          <LoginDiv>
            <LoginText>Don't have an account? </LoginText>
            <LoginLink to='/signup'>sign up</LoginLink>
          </LoginDiv>
        </RightDiv>
      </OuterDiv>
    </>
  );
}
export default LoginForm;
