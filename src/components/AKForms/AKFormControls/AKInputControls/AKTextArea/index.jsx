import { AKClsx } from "@utils";
import TextArea from "antd/es/input/TextArea";
import styles from "../AKInput/AKInput.module.css";

export const AKTextArea = ({
  AKInputClassname,
  placeholder,
  label,
  id,
  AKInputlabelClassName,
  AKInputContainerClassName,
  prefix,
  rows = 4,
  maxLength,
}) => {
  return (
    <div className={AKInputContainerClassName}>
      {label && (
        <label
          htmlFor={id}
          className={AKClsx(styles.AKInputLabel, AKInputlabelClassName)}
        >
          {label}
        </label>
      )}
      <TextArea
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        className={AKClsx(styles.AKInput, AKInputClassname, styles.textArea)}
        prefix={prefix}
      />
    </div>
  );
};
