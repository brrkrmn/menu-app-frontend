import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import LogInForm from '../LogInForm/LogInForm';

const LogInPage = () => {
  return (
    <Flex alignItems='center' justifyContent='space-between' height='100%' >
      <Container display='flex' flexDirection='column' gap='12px' alignItems='center' width='100%'>
        <Heading
          fontFamily="'Wotfard','Wotfard-fallback',sans-serif"
          fontWeight={500}
          color='#424949'
        >
          Giriş Yap
        </Heading>
        <LogInForm />
        <Text color='#424949'>
          Hesabınız yok mu?
          <Text
            as='a'
            href='/signup'
            color='#6D8B74'
            fontWeight='bold'
          >
          <> </>
            Üye olun
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

export default LogInPage;
