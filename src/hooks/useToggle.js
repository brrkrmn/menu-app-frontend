import { useState } from "react";

const useToggle = () => {
  const [visible, setVisible] = useState(false);
  const handleToggleVisible = () => {
    setVisible(!visible)
  }
  return { visible, handleToggleVisible }
}

export default useToggle;