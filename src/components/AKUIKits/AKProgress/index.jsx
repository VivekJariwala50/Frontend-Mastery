import { AKClsx } from "@utils";
import { Progress } from "antd";
import styles from "./AKProgress.module.css";
export const AKProgress = ({
  percent = 45,
  status,
  setInfo = true,
  type,
  customClass,
  strokeColor,
  size,
}) => {
  return (
    <>
      <Progress
        percent={percent}
        showInfo={setInfo}
        status={status}
        type={type}
        className={AKClsx(styles.progress, customClass)}
        strokeColor={strokeColor}
        size={size}
      />
    </>
  );
};
