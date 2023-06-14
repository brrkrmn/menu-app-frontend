import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
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
  const [showPassword, setShowPassword] = React.useState(false)
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

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
      <VStack as='form' onSubmit={handleLogIn} display='flex' flexDirection='column' w="xs" gap='16px'>
        <Input
          id='logInName'
          name='name'
          type={name.type}
          value={name.value}
          onChange={name.onChange}
          placeholder='İsim'
          focusBorderColor='#6D8B74'
          borderRadius='20px'
        />
        <InputGroup>
          <Input
            id='logInPassword'
            name='password'
            type={showPassword ? 'text' : 'password'}
            value={password.value}
            onChange={password.onChange}
            placeholder='Şifre'
            focusBorderColor='#6D8B74'
          borderRadius='20px'
          />
        <InputRightElement as='button' type="button" onClick={handleShowPassword}>
          {showPassword ? <ViewIcon /> : <ViewOffIcon /> }
          </InputRightElement>
        </InputGroup>

        <Button
          type='submit'
          borderRadius='20px'
          bg='#6D8B74'
          color='white'
          w="full"
          _hover={{
            background: '#5F7161'
          }}>Giriş Yap</Button>
    </VStack>
  )
}

export default LogInForm;
