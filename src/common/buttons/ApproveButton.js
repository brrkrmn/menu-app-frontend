import { Button } from "@chakra-ui/react";

const ApproveButton = ({ children = "Onayla" }) => {
  return (
    <Button
      bg="none"
      flexGrow="1"
      border="1px solid #6D8B74"
      color="#6D8B74"
      _hover={{ bg: "#6D8B74", color: "white" }}
      size="sm"
    >
      {children}
    </Button>
  );
};

export default ApproveButton;
