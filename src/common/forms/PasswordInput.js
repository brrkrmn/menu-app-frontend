import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import useToggle from "../../hooks/useToggle";

const PasswordInput = ({ password }) => {
  const { visible, handleToggleVisible } = useToggle();
  return (
    <InputGroup>
      <Input
        type={visible ? "text" : "password"}
        id="password"
        name="password"
        value={password.value}
        onChange={password.onChange}
        focusBorderColor="#6D8B74"
        placeholder="Şifre"
        borderRadius="20px"
      />
      <InputRightElement as="button" type="button" onClick={handleToggleVisible}>
        {visible ? <ViewIcon /> : <ViewOffIcon />}
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
