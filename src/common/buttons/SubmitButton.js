import { Button } from "@chakra-ui/react";

const SubmitButton = ({ children }) => {
  return (
    <Button
      type="submit"
      borderRadius="20px"
      bg="#6D8B74"
      color="white"
      w="full"
      _hover={{
        bg: "#5F7161",
      }}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
