import { SunIcon } from '@chakra-ui/icons';
import { Flex } from "@chakra-ui/react";
import MenuItem from "components/Header/components/MenuItem";
import { AiOutlineHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "reducers/loggedInUserReducer";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <Flex width="full" justifyContent="center" gap="16px">
      <MenuItem icon={<AiOutlineHome />} />
      <MenuItem icon={<SunIcon />} />
      <MenuItem icon={<LuLogOut />} onClick={handleLogOut} />
    </Flex>
  );
};

export default Header;
