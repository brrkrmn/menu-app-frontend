import { Button } from "@chakra-ui/react";
import { colors } from "constants/index.js";
import React from "react";

const TextIconButton = React.forwardRef(({ children, icon, ...rest }, ref) => {
  const { green, white } = colors;
  return (
    <Button
      ref={ref}
      rightIcon={icon}
      bg="none"
      color={green.main}
      border={`1px solid ${green.main}`}
      _hover={{ bg: green.main, color: white }}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default TextIconButton;
