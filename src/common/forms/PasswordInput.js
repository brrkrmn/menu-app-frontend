import { FormControl, FormErrorMessage, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import icons from "common/icons";
import { colors } from "constants/index";
import useToggle from "hooks/useToggle";

const PasswordInput = ({ name, errors, register, placeholder = "Şifre" }) => {
  const { visible, handleToggleVisible } = useToggle();
  return (
    <FormControl isInvalid={!!errors?.[name]?.message}>
      <InputGroup>
        <Input
          type={visible ? "text" : "password"}
          focusBorderColor={!errors?.[name] ? colors.green : colors.red}
          placeholder={placeholder}
          borderRadius="20px"
          {...register(name)}
        />
        <InputRightElement as="button" type="button" onClick={handleToggleVisible}>
          {visible ? icons.openEye : icons.closeEye}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordInput;
