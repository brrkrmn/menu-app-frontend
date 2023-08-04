import { Flex } from "@chakra-ui/react";
import TextInput from "common/forms/TextInput";
import { popoverFormId } from "components/Menu/components/popovers/constants";
import { useForm } from "react-hook-form";
import itemService from "services/item";

const NewItemForm = ({ defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });

  const handleAddItem = async (data) => {
    await itemService.create(data);
  };

  return (
    <Flex as="form" id={popoverFormId.item} onSubmit={handleSubmit(handleAddItem)} direction="column" gap="4px">
      <TextInput name="name" register={register} placeholder="Ürün ismi" radius="8px" />
      <TextInput name="price" register={register} placeholder="Ürün fiyatı" radius="8px" />
    </Flex>
  );
};

export default NewItemForm;
