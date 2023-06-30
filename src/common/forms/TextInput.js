import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { colors } from "constants/index.js";

const TextInput = ({ name, errors, placeholder, register, radius = "20px" }) => {
  return (
    <FormControl isInvalid={!!errors?.[name]?.message}>
      <Input
        placeholder={placeholder}
        focusBorderColor={!errors?.[name] ? colors.green : colors.red}
        borderRadius={radius}
        {...register(name)}
      />
      <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default TextInput;
