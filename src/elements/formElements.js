import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, FormControl, Input, InputGroup, InputRightElement, VStack } from "@chakra-ui/react";
import useField from "../hooks/useField";
import useToggle from "../hooks/useToggle";
export const FormContainer = ({ onSubmit, children }) => {
  return (
    <VStack as="form" onSubmit={onSubmit} display="flex" flexDirection="column" w="xs" gap="16px">
      {children}
    </VStack>
  );
};

export const TextInput = ({ target, placeholder, initialValue }) => {
  return (
    <Input
      id="name"
      name="name"
      type={target.type}
      value={target.value}
      onChange={target.onChange}
      placeholder={placeholder}
      defaultValue={initialValue}
      focusBorderColor="#6D8B74"
      borderRadius="20px"
    />
  );
};

export const PasswordInput = ({ password }) => {
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

export const SubmitButton = ({ buttonText }) => {
  return (
    <Button
      type="submit"
      borderRadius="20px"
      bg="#6D8B74"
      color="white"
      w="full"
      _hover={{
        bg: "#5F7161",
      }}
    >
      {buttonText}
    </Button>
  );
};

export const NewCategoryForm = ({ initialName }) => {
  const categoryName = useField("text", initialName);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input
        id="categoryName"
        type={categoryName.type}
        value={categoryName.value}
        onChange={categoryName.onChange}
        placeholder="Kategori İsmi"
        focusBorderColor="#6D8B74"
      />
    </FormControl>
  );
};

export const NewItemForm = ({ initialName, initialPrice }) => {
  const itemName = useField("text", initialName);
  const itemPrice = useField("text", initialPrice);
  return (
    <FormControl display="flex" flexDirection="column" gap="4px">
      <Input
        id="itemName"
        type={itemName.type}
        value={itemName.value}
        onChange={itemName.onChange}
        placeholder="İtem ismi"
        focusBorderColor="#6D8B74"
      />
      <Input
        id="itemPrice"
        type={itemPrice.type}
        value={itemPrice.value}
        onChange={itemPrice.onChange}
        placeholder="İtem fiyatı"
        focusBorderColor="#6D8B74"
      />
    </FormControl>
  );
};
