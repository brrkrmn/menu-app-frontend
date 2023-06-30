import { DeleteIcon } from "@chakra-ui/icons";
import PopoverBase from "common/PopoverBase";
import SquareIconButton from "common/buttons/SquareIconButton";
import { deletePopoverTitle } from "components/Menu/components/popovers/constants";

const DeletePopover = ({ target }) => {
  return (
    <PopoverBase
      triggerElement={<SquareIconButton label="delete" icon={<DeleteIcon />} />}
      headerElement={deletePopoverTitle[target]}
      placement="right"
    />
  );
};

export default DeletePopover;
