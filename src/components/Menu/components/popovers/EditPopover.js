import PopoverBase from "common/PopoverBase";
import SquareIconButton from "common/buttons/SquareIconButton";
import icons from "common/icons";
import NewCategoryForm from "components/Menu/components/forms/NewCategoryForm";
import NewItemForm from "components/Menu/components/forms/NewItemForm";
import { editPopoverTitle, popoverTarget } from "components/Menu/components/popovers/constants";

const EditPopover = ({ target, targetObject }) => {
  const BodyElement = () => {
    return target === popoverTarget.category ? (
      <NewCategoryForm defaultValues={targetObject} />
    ) : (
      <NewItemForm defaultValues={targetObject} />
    );
  };

  return (
    <PopoverBase
      placement="right"
      headerElement={editPopoverTitle[target]}
      triggerElement={<SquareIconButton label={"edit"} icon={icons.edit} />}
      bodyElement={<BodyElement />}
      approveButtonText={"Kaydet"}
    />
  );
};

export default EditPopover;
