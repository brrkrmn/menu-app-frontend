import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import ApproveButton from "../common/buttons/ApproveButton";
import CancelButton from "../common/buttons/CancelButton";
import CircleIconButton from "../common/buttons/CircleIconButton";
import { NewCategoryForm, NewItemForm } from "./formElements";

export const PopoverBase = ({ triggerElement, headerElement, bodyElement }) => {
  const initRef = React.useRef();
  return (
    <Popover initialFocusRef={initRef}>
      {({ onClose }) => (
        <>
          <PopoverTrigger>{triggerElement}</PopoverTrigger>
          <PopoverContent w="fit-content">
            <PopoverArrow />
            {headerElement ? (
              <PopoverHeader w="fit-content" fontSize="sm">
                {headerElement}
              </PopoverHeader>
            ) : null}
            <PopoverBody display="flex" flexDirection="column" justifyContent="center" gap="12px">
              {bodyElement || null}
              <Box display="flex" justifyContent="center" gap="8px">
                <ApproveButton />
                <CancelButton onClick={onClose} ref={initRef} />
              </Box>
            </PopoverBody>
          </PopoverContent>
        </>
      )}
    </Popover>
  );
};

export const AddPopover = ({ target }) => {
  const headerElement = target === "category" ? "Yeni kategori ekleyin" : "Yeni item ekleyin";
  return (
    <PopoverBase
      headerElement={headerElement}
      triggerElement={<CircleIconButton label={"add"} icon={<AddIcon />} />}
      bodyElement={target === "category" ? <NewCategoryForm /> : <NewItemForm />}
    />
  );
};

export const EditPopover = ({ target }) => {
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

export const DeletePopover = ({ text }) => {
  return (
    <PopoverBase triggerElement={<CircleIconButton label={"delete"} icon={<DeleteIcon />} />} headerElement={text} />
  );
};
