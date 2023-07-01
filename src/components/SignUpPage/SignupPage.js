import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import SignupForm from "components/SignupForm/SignupForm";
import { colors } from "constants/index.js";

const SignupPage = () => {
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
          Kaydol
        </Heading>
        <Spacer />
        <SignupForm />
        <Text color={green.text}>
          Zaten üye misiniz?
          <Text as="a" href="/login" color={green.main} fontWeight="bold">
            Giriş yapın
          </Text>
        </Text>
      </Container>
      <Box height="100%" width="50%" bgColor={green.main} borderRadius="20px"></Box>
    </Flex>
  );
};

export default SignupPage;
