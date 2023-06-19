import { AddIcon } from "@chakra-ui/icons";
import PopoverBase from "common/PopoverBase";
import CircleIconButton from "common/buttons/CircleIconButton";
import NewCategoryForm from "components/Menu/components/forms/NewCategoryForm";
import NewItemForm from "components/Menu/components/forms/NewItemForm";
import { addPopoverTitle, popoverTarget } from "components/Menu/components/popovers/constants";

const AddPopover = ({ target }) => {
  return (
    <PopoverBase
      headerElement={addPopoverTitle[target]}
      triggerElement={<CircleIconButton label={"add"} icon={<AddIcon />} />}
      bodyElement={target === popoverTarget.category ? <NewCategoryForm /> : <NewItemForm />}
    />
  );
};

export default AddPopover;
