import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormControl, FormErrorMessage, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import useToggle from "hooks/useToggle";

const PasswordInput = ({ name, errors, register }) => {
  const { visible, handleToggleVisible } = useToggle();
  return (
    <FormControl isInvalid={!!errors?.[name]?.message}>
      <InputGroup>
        <Input
          type={visible ? "text" : "password"}
          focusBorderColor={!errors?.[name] ? "#6D8B74" : "#E53E3E"}
          placeholder="Şifre"
          borderRadius="20px"
          {...register(name)}
        />
        <InputRightElement as="button" type="button" onClick={handleToggleVisible}>
          {visible ? <ViewIcon /> : <ViewOffIcon />}
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default PasswordInput;
