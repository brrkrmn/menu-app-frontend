import { FormControl } from "@chakra-ui/react";
import TextInput from "common/forms/TextInput";
import useField from "hooks/useField";

const NewItemForm = ({ initialName, initialPrice }) => {
  const itemName = useField("text", initialName);
  const itemPrice = useField("text", initialPrice);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <TextInput id="itemName" target={itemName} placeholder="Ürün ismi" radius="8px" />
      <TextInput id="itemPrice" target={itemPrice} placeholder="Ürün fiyatı" radius="8px" />
    </FormControl>
  );
};

export default NewItemForm;
