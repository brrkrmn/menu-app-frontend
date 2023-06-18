import { Input } from "@chakra-ui/react";

const TextInput = ({ target, placeholder, initialValue }) => {
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

export default TextInput;
