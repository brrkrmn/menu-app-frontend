import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      position="top-left"
      toastOptions={{
        duration: 4000,
        success: {
          iconTheme: {
            primary: "#6D8B74",
            secondary: "#fff",
          },
        },
        error: {
          iconTheme: {
            primary: "#C0392B",
            secondary: "#fff",
          },
        },
      }}
    />
  );
};

export default Toast;
