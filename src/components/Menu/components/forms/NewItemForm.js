import { FormControl } from "@chakra-ui/react";
import TextInput from "common/forms/TextInput";
import { useForm } from "react-hook-form";

const NewItemForm = ({ initialName, initialPrice }) => {
  const { register } = useForm({ defaultValues: { name: initialName, price: initialPrice } });
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <TextInput name="name" register={register} placeholder="Ürün ismi" radius="8px" />
      <TextInput name="price" register={register} placeholder="Ürün fiyatı" radius="8px" />
    </FormControl>
  );
};

export default NewItemForm;
