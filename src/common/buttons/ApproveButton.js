import { Button } from "@chakra-ui/react";
import { colors } from "constants/index.js";

const ApproveButton = ({ children = "Onayla" }) => {
  const { green, white } = colors;
  return (
    <Button
      type="submit"
      bg="none"
      flexGrow="1"
      border={`1px solid ${green.main}`}
      color={green.main}
      _hover={{ bg: green.main, color: white }}
      size="sm"
    >
      {children}
    </Button>
  );
};

export default ApproveButton;
