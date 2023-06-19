import { AddIcon } from "@chakra-ui/icons";
import PopoverBase from "common/PopoverBase";
import CircleIconButton from "common/buttons/CircleIconButton";
import NewCategoryForm from "components/Menu/components/NewCategoryForm";
import NewItemForm from "components/Menu/components/NewItemForm";

const AddPopover = ({ target }) => {
  const headerElement = target === "category" ? "Yeni kategori ekleyin" : "Yeni item ekleyin";
  return (
    <PopoverBase
      headerElement={headerElement}
      triggerElement={<CircleIconButton label={"add"} icon={<AddIcon />} />}
      bodyElement={target === "category" ? <NewCategoryForm /> : <NewItemForm />}
    />
  );
};

export default AddPopover;
