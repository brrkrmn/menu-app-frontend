import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import SignUpForm from '../SignUpForm';

const SignUpPage = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between' height='100%' >
      <Container display='flex' flexDirection='column' gap='12px' alignItems='center' width='100%'>
        <Heading
          fontFamily="'Wotfard','Wotfard-fallback',sans-serif"
          fontWeight={500}
          color='#424949'
        >
          Kaydol
        </Heading>
        <SignUpForm />
        <Text color='#424949'>
          Zaten üye misiniz?
          <Text
            as='a'
            href='/login'
            color='#6D8B74'
            fontWeight='bold'
          >
          <> </>
            Giriş yapın
          </Text>
        </Text>
      </Container>
      <Box
        height='100%'
        width='50%'
        bgColor='#6D8B74'
        borderRadius='20px'
      >
      </Box>
    </Flex>
  )
}

export default SignUpPage;
