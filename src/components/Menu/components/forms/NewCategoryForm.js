import { FormControl, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const NewCategoryForm = ({ defaultValues }) => {
  const { register } = useForm({
    defaultValues,
  });

  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input {...register("name")} placeholder="Kategori İsmi" focusBorderColor="#6D8B74" />
    </FormControl>
  );
};

export default NewCategoryForm;
