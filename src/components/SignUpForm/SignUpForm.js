import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useField from '../../hooks/useField';
import useToggle from '../../hooks/useToggle';
import signupService from '../../services/signup';
const SignUpForm = () => {
  const navigate = useNavigate();
  const name = useField('text');
  const password = useField('password');
  const { visible, handleToggleVisible } = useToggle();
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
    <VStack as='form' onSubmit={handleSignUp} display='flex' flexDirection='column' w='xs' gap='16px'>
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
      <InputGroup>
        <Input
          type={visible ? 'text' : 'password'}
          id='password'
          value={password.value}
          name='password'
          onChange={password.onChange}
          focusBorderColor='#6D8B74'
          placeholder='Şifre'
          borderRadius='20px'
        />
        <InputRightElement as='button' type='button' onClick={handleToggleVisible}>
          {visible ? <ViewIcon /> : <ViewOffIcon />}
        </InputRightElement>
      </InputGroup>

      <Button
        type='submit'
        borderRadius='20px'
        bg='#6D8B74'
        color='white'
        w='full'
        _hover={{
          background: '#5F7161'
        }}
      >
        Kaydol
      </Button>
    </VStack>
  )
}

export default SignUpForm;
