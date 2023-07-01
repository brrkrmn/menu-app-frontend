import { AddIcon, DeleteIcon, EditIcon, SunIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AiOutlineHome } from "react-icons/ai";
import { LuLogOut } from "react-icons/lu";

const icons = {
  home: <AiOutlineHome />,
  sun: <SunIcon />,
  logout: <LuLogOut />,
  openEye: <ViewIcon />,
  closeEye: <ViewOffIcon />,
  plus: <AddIcon />,
  delete: <DeleteIcon />,
  edit: <EditIcon />,
};

export default icons;
