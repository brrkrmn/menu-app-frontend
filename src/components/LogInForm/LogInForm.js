import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import SubmitButton from "../../common/buttons/SubmitButton.js";
import FormContainer from "../../common/forms/FormContainer";
import PasswordInput from "../../common/forms/PasswordInput";
import TextInput from "../../common/forms/TextInput";
import useField from '../../hooks/useField';
import { logUserIn } from '../../reducers/loggedInUserReducer';
import loginService from '../../services/login';

const LogInForm = () => {
  const navigate = useNavigate();
  const name = useField('text');
  const password = useField('password');
  const dispatch = useDispatch();
  const handleLogIn = async (event) => {
    event.preventDefault()
    const user = {
      name: name.value,
      password: password.value,
    }

    try {
      const userToLogIn = await loginService.login(user);
      dispatch(logUserIn(userToLogIn))
    } catch (error) {
      window.alert('Login failed')
    }

    name.setValue('');
    password.setValue('');
    navigate('/home')
  }

  return (
    <FormContainer onSubmit={handleLogIn}>
      <TextInput target={name} placeholder="İsim" id="loginName" />
      <PasswordInput password={password} id="loginPassword" />
      <SubmitButton>Giriş Yap</SubmitButton>
    </FormContainer>
  );
}

export default LogInForm;
