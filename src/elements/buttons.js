import { Button, IconButton } from "@chakra-ui/react";
import React from "react";

export const CircleIconButton = React.forwardRef(({ icon, label, ...rest }, ref) => {
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

export const ApproveButton = ({ text }) => {
  return (
    <Button
      bg="none"
      flexGrow="1"
      border="1px solid #6D8B74"
      color="#6D8B74"
      _hover={{ bg: "#6D8B74", color: "white" }}
      size="sm"
    >
      {text ? text : "Onayla"}
    </Button>
  );
};

export const CancelButton = ({ onClick }) => {
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
