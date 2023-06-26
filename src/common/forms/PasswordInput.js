import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import useToggle from "hooks/useToggle";

const PasswordInput = ({ name, errors, register }) => {
  const { visible, handleToggleVisible } = useToggle();
  return (
    <>
      <InputGroup>
        <Input
          type={visible ? "text" : "password"}
          focusBorderColor="#6D8B74"
          placeholder="Şifre"
          borderRadius="20px"
          {...register(name)}
        />
        <InputRightElement as="button" type="button" onClick={handleToggleVisible}>
          {visible ? <ViewIcon /> : <ViewOffIcon />}
        </InputRightElement>
      </InputGroup>
      <p>{errors?.[name]?.message}</p>
    </>
  );
};

export default PasswordInput;
