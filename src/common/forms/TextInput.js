import { Input } from "@chakra-ui/react";
const TextInput = ({ name, errors, placeholder, register, radius = "20px" }) => {
  return (
    <>
      <Input placeholder={placeholder} focusBorderColor="#6D8B74" borderRadius={radius} {...register(name)} />
      <p>{errors?.[name]?.message}</p>
    </>
  );
};

export default TextInput;
