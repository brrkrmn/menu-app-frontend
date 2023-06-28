import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import SignupForm from "components/SignupForm/SignupForm";

const SignupPage = () => {
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
        <Heading fontFamily="'Wotfard','Wotfard-fallback',sans-serif" fontWeight={500} color="#424949">
          Kaydol
        </Heading>
        <Spacer />
        <SignupForm />
        <Text color="#424949">
          Zaten üye misiniz?
          <Text as="a" href="/login" color="#6D8B74" fontWeight="bold">
            Giriş yapın
          </Text>
        </Text>
      </Container>
      <Box height="100%" width="50%" bgColor="#6D8B74" borderRadius="20px"></Box>
    </Flex>
  );
};

export default SignupPage;