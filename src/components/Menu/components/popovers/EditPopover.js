import { EditIcon } from "@chakra-ui/icons";
import PopoverBase from "common/PopoverBase";
import CircleIconButton from "common/buttons/CircleIconButton";
import NewCategoryForm from "components/Menu/components/forms/NewCategoryForm";
import NewItemForm from "components/Menu/components/forms/NewItemForm";
import { editPopoverTitle, popoverTarget } from "components/Menu/components/popovers/constants";

const EditPopover = ({ target, targetObject }) => {
  const BodyElement = () => {
    return target === popoverTarget.category ? (
      <NewCategoryForm initialName={targetObject.name} />
    ) : (
      <NewItemForm initialName={targetObject.name} initialPrice={targetObject.price} />
    );
  };

  return (
    <PopoverBase
      headerElement={editPopoverTitle[target]}
      triggerElement={<CircleIconButton label={"edit"} icon={<EditIcon />} />}
      bodyElement={<BodyElement />}
      approveButtonText={"Kaydet"}
    />
  );
};

export default EditPopover;
