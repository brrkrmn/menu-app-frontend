import { toast } from "react-hot-toast";

const notify = (notification) => {
  const { id, type, message } = notification;
  toast[type](message, { id });
};

export default notify;
