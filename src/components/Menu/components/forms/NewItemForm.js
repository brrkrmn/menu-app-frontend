import TextInput from "common/forms/TextInput";
import { popoverFormId } from "components/Menu/components/popovers/constants";
import { useForm } from "react-hook-form";

const NewItemForm = ({ defaultValues }) => {
  const { register } = useForm({ defaultValues });
  return (
    <form id={popoverFormId.item} display="flex" flexDirection="column" gap="4px">
      <TextInput name="name" register={register} placeholder="Ürün ismi" radius="8px" />
      <TextInput name="price" register={register} placeholder="Ürün fiyatı" radius="8px" />
    </form>
  );
};

export default NewItemForm;
