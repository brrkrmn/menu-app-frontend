import { Button } from "@chakra-ui/react";
import { colors } from "constants/index.js";

const SubmitButton = ({ children }) => {
  const { green, white } = colors;
  return (
    <Button
      type="submit"
      borderRadius="20px"
      bg={green.main}
      color={white}
      w="full"
      _hover={{
        bg: green.dark,
      }}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
