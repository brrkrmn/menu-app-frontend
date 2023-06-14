import { Box, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    <Box as='form' onSubmit={handleSignUp} display='flex' flexDirection='column' gap='12px'>
      <Input
        type={name.type}
        id='name'
        value={name.value}
        name='name'
        onChange={name.onChange}
        focusBorderColor='#6D8B74'
        placeholder='İsim'
        borderRadius='20px'
      />
      <Input
        type={password.type}
        id='password'
        value={password.value}
        name='password'
        onChange={password.onChange}
        focusBorderColor='#6D8B74'
        placeholder='Şifre'
        borderRadius='20px'
      />
      <Button
        type='submit'
        borderRadius='20px'
        bg='#6D8B74'
        color='white'
        _hover={{
          background: '#5F7161'
        }}
      >
        Kaydol
      </Button>
    </Box>
  )
}

export default SignUpForm;
