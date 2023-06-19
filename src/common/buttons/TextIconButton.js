import { Button } from "@chakra-ui/react";
import React from "react";

const TextIconButton = React.forwardRef(({ children, icon, ...rest }, ref) => {
  return (
    <Button
      ref={ref}
      rightIcon={icon}
      bg="none"
      color="#6D8B74"
      border="1px solid #6D8B74"
      _hover={{ bg: "#6D8B74", color: "white" }}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default TextIconButton;
