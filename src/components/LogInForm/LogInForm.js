import { Box, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
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

  const inputStyles = {
    borderRadius: '20px',
  }

  return (
      <Box as='form' onSubmit={handleLogIn} display='flex' flexDirection='column' gap='12px'>
        <Input
          id='logInName'
          name='name'
          type={name.type}
          value={name.value}
          onChange={name.onChange}
          placeholder='İsim'
          focusBorderColor='#6D8B74'
          sx={inputStyles}
        />
        <Input
          id='logInPassword'
          name='password'
          type={password.type}
          value={password.value}
          onChange={password.onChange}
          placeholder='Şifre'
          focusBorderColor='#6D8B74'
          sx={inputStyles}
        />
      <Button
        type='submit'
        borderRadius='20px'
        bg='#6D8B74'
        color='white'
        _hover={{
          background: '#5F7161'
        }}
      >Giriş Yap</Button>
    </Box>
  )
}

export default LogInForm;
