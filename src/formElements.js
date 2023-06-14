import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react"
import useToggle from "./hooks/useToggle"

export const FormContainer = ({ onSubmit, children }) => {
  return (
    <VStack
      as='form'
      onSubmit={onSubmit}
      display='flex'
      flexDirection='column'
      w='xs'
      gap='16px'
    >
    {children}
    </VStack>
  )
}
export const SubmitButton = ({ buttonText }) => {
  return (
    <Button
      type='submit'
      borderRadius='20px'
      bg='#6D8B74'
      color='white'
      w='full'
      _hover={{
        bg:'#5F7161'
      }}>
      {buttonText}
    </Button>
  )
}

export const PasswordInput = ({ password }) => {
  const { visible, handleToggleVisible } = useToggle()
  return (
    <InputGroup>
      <Input
        type={visible ? 'text' : 'password'}
        id='password'
        name='password'
        value={password.value}
        onChange={password.onChange}
        focusBorderColor='#6D8B74'
        placeholder='Şifre'
        borderRadius='20px'
      />
      <InputRightElement as='button' type='button' onClick={handleToggleVisible} >
        {visible ? <ViewIcon /> : <ViewOffIcon />}
      </InputRightElement>
    </InputGroup>
  )
}

export const TextInput = ({ target, placeholder }) => {
  return (
    <Input
      id='name'
      name='name'
      type={target.type}
      value={target.value}
      onChange={target.onChange}
      placeholder={placeholder}
      focusBorderColor='#6D8B74'
      borderRadius='20px'
    />
  )
}