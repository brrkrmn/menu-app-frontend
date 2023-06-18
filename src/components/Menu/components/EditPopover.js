import { EditIcon } from "@chakra-ui/icons";
import PopoverBase from "../../../common/PopoverBase";
import CircleIconButton from "../../../common/buttons/CircleIconButton";
import NewCategoryForm from "./NewCategoryForm";
import NewItemForm from "./NewItemForm";

const EditPopover = ({ target }) => {
  let targetType = "";
  if (!target.price) {
    targetType = "category";
  } else if (target.price) {
    targetType = "item";
  }

  const headerElement = targetType === "category" ? "Kategoriyi düzenleyin" : "İtemi düzenleyin";
  const BodyElement = () => {
    return targetType === "category" ? (
      <NewCategoryForm initialName={target.name} />
    ) : (
      <NewItemForm initialName={target.name} initialPrice={target.price} />
    );
  };

  return (
    <PopoverBase
      headerElement={headerElement}
      triggerElement={<CircleIconButton label={"edit"} icon={<EditIcon />} />}
      bodyElement={<BodyElement />}
    />
  );
};

export default EditPopover;
