import { Input } from "@chakra-ui/react";
import { popoverFormId } from "components/Menu/components/popovers/constants";
import { colors } from "constants/index.js";
import { useForm } from "react-hook-form";
const NewCategoryForm = ({ defaultValues }) => {
  const { register, handleSubmit } = useForm({ defaultValues });
  const { green } = colors;

  const handleAddCategory = () => {
    console.log("works");
  };

  return (
    <form
      id={popoverFormId.category}
      onSubmit={handleSubmit(handleAddCategory)}
      display="flex"
      flexDirection="column"
      gap="4px"
    >
      <Input {...register("name")} placeholder="Kategori İsmi" focusBorderColor={green.main} />
    </form>
  );
};

export default NewCategoryForm;
