import { Input } from "@chakra-ui/react";

const TextInput = ({ target, placeholder, initialValue, id, radius = "20px" }) => {
  return (
    <Input
      id={id}
      name={id}
      type={target.type}
      value={target.value}
      onChange={target.onChange}
      placeholder={placeholder}
      defaultValue={initialValue}
      focusBorderColor="#6D8B74"
      borderRadius={radius}
    />
  );
};

export default TextInput;
