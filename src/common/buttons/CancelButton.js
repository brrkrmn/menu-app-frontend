import { Button } from "@chakra-ui/react";

const CancelButton = ({ onClick }) => {
  return (
    <Button
      flexGrow="1"
      bg="none"
      border="1px solid #C0392B"
      color="#C0392B"
      _hover={{ bg: "#C0392B", color: "white" }}
      onClick={onClick}
      size="sm"
    >
      Vazgeç
    </Button>
  );
};

export default CancelButton;
