import { Button } from "@chakra-ui/react";

const SubmitButton = ({ buttonText }) => {
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
      {buttonText}
    </Button>
  );
};

export default SubmitButton;
