import { AKClsx } from "@utils";
import { Alert } from "antd";
import styles from "./AKAlert.module.css";
export const AKAlert = ({
  type,
  message,
  description,
  handleClose,
  isClosable,
  customClass,
  isIcon
}) => {

  const alertType = type == "default" ? styles.default : type == "success" ? styles.success : type == "info" ? styles.info : type == "warning" ? styles.warning : type == "error" ? styles.error : styles.success;

  return (
    <Alert
      type={type}
      message={message}
      description={description}
      onClose={handleClose}
      closable={isClosable}
      className={AKClsx(styles.alert, customClass, alertType)}
      showIcon={isIcon}
    />
  )
}
