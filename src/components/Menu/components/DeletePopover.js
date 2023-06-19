import { DeleteIcon } from "@chakra-ui/icons";
import PopoverBase from "common/PopoverBase";
import CircleIconButton from "common/buttons/CircleIconButton";

const DeletePopover = ({ text }) => {
  return (
    <PopoverBase triggerElement={<CircleIconButton label={"delete"} icon={<DeleteIcon />} />} headerElement={text} />
  );
};

export default DeletePopover;
