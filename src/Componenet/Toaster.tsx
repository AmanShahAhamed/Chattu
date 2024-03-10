import { ToastPosition, toast } from "react-toastify";

interface NotifyProps {
  position?: ToastPosition;
  toastType: "error" | "info" | "success" | "warn";
  msg: string;
}

const Notify = ({
  position = "top-right",
  toastType = "success",
  msg,
}: NotifyProps) => {
  if (toastType === "error") toast.error(msg, { position });
  if (toastType === "info") toast.info(msg, { position });
  if (toastType === "success") toast.success(msg, { position });
  if (toastType === "warn") toast.warn(msg, { position });
};

export default Notify;
