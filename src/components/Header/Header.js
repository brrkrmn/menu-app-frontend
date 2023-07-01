import { Flex } from "@chakra-ui/react";
import icons from "components/Header/Header.icons";
import MenuItem from "components/Header/components/MenuItem";
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
      <MenuItem icon={icons.home} />
      <MenuItem icon={icons.sun} />
      <MenuItem icon={icons.logout} onClick={handleLogOut} />
    </Flex>
  );
};

export default Header;
