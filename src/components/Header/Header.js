import { SunIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from "@chakra-ui/react";
import { colors } from "constants/index.js";
import { AiOutlineHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "reducers/loggedInUserReducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { green, white } = colors;

  const handleLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <Flex width="full" justifyContent="center" gap="16px">
      <IconButton
        icon={<AiOutlineHome />}
        bg={white}
        color={green.main}
        size="lg"
        borderRadius="50%"
        boxShadow="base"
        _hover={{ boxShadow: "lg", color: white, bg: green.main }}
      />
      <IconButton
        icon={<SunIcon />}
        bg={white}
        color={green.main}
        size="lg"
        borderRadius="50%"
        boxShadow="base"
        _hover={{ boxShadow: "lg", color: white, bg: green.main }}
      />
      <IconButton
        icon={<LuLogOut />}
        onClick={handleLogOut}
        bg={white}
        color={green.main}
        size="lg"
        borderRadius="50%"
        boxShadow="base"
        _hover={{ boxShadow: "lg", color: white, bg: green.main }}
      />
    </Flex>
  );
};

export default Header;
