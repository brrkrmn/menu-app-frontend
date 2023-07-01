import { colors } from "constants/index.js";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  const { green, red, white } = colors;
  return (
    <Toaster
      position="top-left"
      toastOptions={{
        duration: 4000,
        success: {
          iconTheme: {
            primary: green.main,
            secondary: white,
          },
        },
        error: {
          iconTheme: {
            primary: red,
            secondary: white,
          },
        },
      }}
    />
  );
};

export default Toast;
