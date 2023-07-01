import PopoverBase from "common/PopoverBase";
import SquareIconButton from "common/buttons/SquareIconButton";
import TextIconButton from "common/buttons/TextIconButton";
import icons from "components/Menu/Menu.icons";
import NewCategoryForm from "components/Menu/components/forms/NewCategoryForm";
import NewItemForm from "components/Menu/components/forms/NewItemForm";
import { addPopoverTitle, popoverTarget } from "components/Menu/components/popovers/constants";

const AddPopover = ({ target }) => {
  return (
    <PopoverBase
      placement="right"
      headerElement={addPopoverTitle[target]}
      triggerElement={
        target === popoverTarget.category ? (
          <TextIconButton icon={icons.plus}>Yeni Kategori</TextIconButton>
        ) : (
          <SquareIconButton label={"add"} icon={icons.plus} />
        )
      }
      bodyElement={target === popoverTarget.category ? <NewCategoryForm /> : <NewItemForm />}
    />
  );
};

export default AddPopover;
