import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitButton } from "../../elements/buttons";
import { FormContainer, PasswordInput, TextInput } from "../../elements/formElements";
import useField from '../../hooks/useField';
import signupService from '../../services/signup';

const SignUpForm = () => {
  const navigate = useNavigate();
  const name = useField('text');
  const password = useField('password');

  const handleSignUp = async (event) => {
    event.preventDefault()
    const newUser = {
      name: name.value,
      password: password.value,
    }
    await signupService.create(newUser)
    name.setValue('')
    password.setValue('')
    navigate('/login')
  }

  return (
    <FormContainer onSubmit={handleSignUp}>
      <TextInput target={name} placeholder='İsim' />
      <PasswordInput password={password} />
      <SubmitButton buttonText='Kaydol' />
    </FormContainer>
  )
}

export default SignUpForm;
