import { FormControl, Input } from "@chakra-ui/react";
import { colors } from "constants/index.js";
import { useForm } from "react-hook-form";

const NewCategoryForm = ({ defaultValues }) => {
  const { register } = useForm({
    defaultValues,
  });
  const { green } = colors;

  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input {...register("name")} placeholder="Kategori İsmi" focusBorderColor={green.main} />
    </FormControl>
  );
};

export default NewCategoryForm;
