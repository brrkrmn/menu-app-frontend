import { IconButton } from "@chakra-ui/react";
import React from "react";

const SquareIconButton = React.forwardRef(({ icon, label, ...rest }, ref) => {
  return (
    <IconButton
      ref={ref}
      aria-label={label}
      icon={icon}
      size="md"
      color="#6D8B74"
      bg="none"
      borderRadius="8px"
      _hover={{ border: "1px solid #6D8B74" }}
      _focus={{ color: "white", bg: "#6D8B74" }}
      {...rest}
    />
  );
});

export default SquareIconButton;
