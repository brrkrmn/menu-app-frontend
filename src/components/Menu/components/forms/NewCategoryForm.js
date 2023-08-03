import { FormControl, Input } from "@chakra-ui/react";
import { colors } from "constants/index.js";
import React from "react";
import { useForm } from "react-hook-form";
const NewCategoryForm = ({ defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const submitRef = React.useRef();
  const { green } = colors;

  const handleAddCategory = () => {
    console.log("works");
  };

  return (
    <FormControl onSubmit={handleSubmit(handleAddCategory)} display="flex" flexDirection="column" gap="4px">
      <Input {...register("name")} placeholder="Kategori İsmi" focusBorderColor={green.main} />
    </FormControl>
  );
};

export default NewCategoryForm;