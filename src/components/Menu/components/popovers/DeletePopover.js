import PopoverBase from "common/PopoverBase";
import SquareIconButton from "common/buttons/SquareIconButton";
import icons from "components/Menu/Menu.icons";
import { deletePopoverTitle } from "components/Menu/components/popovers/constants";

const DeletePopover = ({ target }) => {
  return (
    <PopoverBase
      triggerElement={<SquareIconButton label="delete" icon={icons.delete} />}
      headerElement={deletePopoverTitle[target]}
      placement="right"
    />
  );
};

export default DeletePopover;
