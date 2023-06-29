import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
const TextInput = ({ name, errors, placeholder, register, radius = "20px" }) => {
  return (
    <FormControl isInvalid={!!errors?.[name]?.message}>
      <Input
        placeholder={placeholder}
        focusBorderColor={!errors?.[name] ? "#6D8B74" : "#E53E3E"}
        borderRadius={radius}
        {...register(name)}
      />
      <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
