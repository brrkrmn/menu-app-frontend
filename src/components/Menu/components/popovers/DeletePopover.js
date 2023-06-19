import { DeleteIcon } from "@chakra-ui/icons";
import PopoverBase from "common/PopoverBase";
import CircleIconButton from "common/buttons/CircleIconButton";
import { deletePopoverTitle } from "components/Menu/components/popovers/constants";
const DeletePopover = ({ target }) => {
  return (
    <PopoverBase
      triggerElement={<CircleIconButton label={"delete"} icon={<DeleteIcon />} />}
      headerElement={deletePopoverTitle[target]}
    />
  );
};

export default DeletePopover;
