import { useState } from "react";

const useField = (type, initialValue) => {
  const [value, setValue] = useState(initialValue || "");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { type, value, onChange, setValue };
};

export default useField;