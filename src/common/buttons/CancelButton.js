import { Button } from "@chakra-ui/react";
import { colors } from "constants/index.js";
const CancelButton = ({ onClick }) => {
  const { red, white } = colors;
  return (
    <Button
      flexGrow="1"
      bg="none"
      border={`1px solid ${red}`}
      color={red}
      _hover={{ bg: red, color: white }}
      onClick={onClick}
      size="sm"
    >
      Vazgeç
    </Button>
  );
};

export default CancelButton;
