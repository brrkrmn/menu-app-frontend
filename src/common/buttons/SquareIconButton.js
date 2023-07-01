import { IconButton } from "@chakra-ui/react";
import { colors } from "constants/index.js";
import React from "react";

const SquareIconButton = React.forwardRef(({ icon, label, ...rest }, ref) => {
  const { green, white } = colors;
  return (
    <IconButton
      ref={ref}
      aria-label={label}
      icon={icon}
      size="md"
      color={green.main}
      bg="none"
      borderRadius="8px"
      _hover={{ border: `1px solid ${green.main}` }}
      _focus={{ color: white, bg: green.main }}
      {...rest}
    />
  );
});

export default SquareIconButton;
