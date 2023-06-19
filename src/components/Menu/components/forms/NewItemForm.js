import { FormControl } from "@chakra-ui/react";
import TextInput from "common/forms/TextInput";
import useField from "hooks/useField";

const NewItemForm = ({ initialName, initialPrice }) => {
  const name = useField("text", initialName);
  const price = useField("text", initialPrice);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <TextInput id="itemName" target={name} placeholder="Ürün ismi" radius="8px" />
      <TextInput id="itemPrice" target={price} placeholder="Ürün fiyatı" radius="8px" />
    </FormControl>
  );
};

export default NewItemForm;
