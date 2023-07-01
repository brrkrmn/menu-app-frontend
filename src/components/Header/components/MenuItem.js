import { IconButton } from "@chakra-ui/react";
import { colors } from "constants/index.js";

const MenuItem = ({ icon, onClick }) => {
  const { green, white } = colors;

  return (
    <IconButton
      onClick={onClick}
      icon={icon}
      bg={white}
      color={green.main}
      size="lg"
      borderRadius="50%"
      boxShadow="base"
      _hover={{ boxShadow: "lg", color: white, bg: green.main }}
    />
  );
};

export default MenuItem;
