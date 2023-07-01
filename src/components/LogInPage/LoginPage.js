import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import LoginForm from "components/LoginForm/LoginForm";
import { colors } from "constants/index.js";

const LoginPage = () => {
  const { green } = colors;
  return (
    <Flex alignItems="center" justifyContent="space-between" height="100%" w="full">
      <Container
        padding="40px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="16px"
        width="fit-content"
        boxShadow="md"
        borderRadius="12px"
        _hover={{ boxShadow: "xl" }}
        transition="0.3s"
      >
        <Heading fontFamily="'Wotfard','Wotfard-fallback',sans-serif" fontWeight={500} color={green.text}>
          Giriş Yap
        </Heading>
        <Spacer />
        <LoginForm />
        <Text color={green.text}>
          Hesabınız yok mu?
          <Text as="a" href="/signup" color={green.main} fontWeight="bold">
            Üye olun
          </Text>
        </Text>
      </Container>
      <Box height="100%" width="50%" bgColor={green.main} borderRadius="20px"></Box>
    </Flex>
  );
};

export default LoginPage;
