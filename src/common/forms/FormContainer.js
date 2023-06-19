import { VStack } from "@chakra-ui/react";

export const FormContainer = ({ onSubmit, children }) => {
  return (
    <VStack as="form" onSubmit={onSubmit} display="flex" flexDirection="column" w="xs" gap="16px">
      {children}
    </VStack>
  );
};

export default FormContainer;
