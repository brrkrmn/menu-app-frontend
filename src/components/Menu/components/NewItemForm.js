import { FormControl, Input } from "@chakra-ui/react";
import useField from "../../../hooks/useField";

const NewItemForm = ({ initialName, initialPrice }) => {
  const itemName = useField("text", initialName);
  const itemPrice = useField("text", initialPrice);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input
        id="itemName"
        type={itemName.type}
        value={itemName.value}
        onChange={itemName.onChange}
        placeholder="İtem ismi"
        focusBorderColor="#6D8B74"
      />
      <Input
        id="itemPrice"
        type={itemPrice.type}
        value={itemPrice.value}
        onChange={itemPrice.onChange}
        placeholder="İtem fiyatı"
        focusBorderColor="#6D8B74"
      />
    </FormControl>
  );
};

export default NewItemForm;
