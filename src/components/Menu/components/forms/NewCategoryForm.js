import { Flex, Input } from "@chakra-ui/react";
import { popoverFormId } from "components/Menu/components/popovers/constants";
import { colors } from "constants/index.js";
import { useForm } from "react-hook-form";
import categoryService from "services/category";

const NewCategoryForm = ({ defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const { green } = colors;

  const handleAddCategory = async (data) => {
    await categoryService.create(data);
  };

  return (
    <Flex as="form" id={popoverFormId.category} onSubmit={handleSubmit(handleAddCategory)} direction="column" gap="4px">
      <Input {...register("name")} placeholder="Kategori İsmi" focusBorderColor={green.main} />
    </Flex>
  );
};

export default NewCategoryForm;
