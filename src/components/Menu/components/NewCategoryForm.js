import { FormControl, Input } from "@chakra-ui/react";
import useField from "../../../hooks/useField";

const NewCategoryForm = ({ initialName }) => {
  const categoryName = useField("text", initialName);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input
        id="categoryName"
        type={categoryName.type}
        value={categoryName.value}
        onChange={categoryName.onChange}
        placeholder="Kategori İsmi"
        focusBorderColor="#6D8B74"
      />
    </FormControl>
  );
};

export default NewCategoryForm;
