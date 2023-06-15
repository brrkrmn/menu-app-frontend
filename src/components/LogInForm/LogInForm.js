import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FormContainer, PasswordInput, SubmitButton, TextInput } from '../../elements/formElements';
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
      <TextInput target={name} placeholder='İsim' />
      <PasswordInput password={password} />
      <SubmitButton buttonText='Giriş Yap' />
    </FormContainer>
  )
}

export default LogInForm;
