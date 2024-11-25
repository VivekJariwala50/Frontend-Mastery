import { AKClsx } from "@utils";
import { Input } from "antd";
import styles from "./AKInput.module.css";

const AKInput = ({
  AKInputClassname,
  placeholder,
  label,
  id,
  AKInputlabelClassName,
  AKInputContainerClassName,
  type,
  status,
  errorMessage,
  prefix,
}) => {
  return (
    <>
      <div className={AKInputContainerClassName}>
        {label && (
          <label
            htmlFor={id}
            className={AKClsx(styles.AKInputLabel, AKInputlabelClassName)}
          >
            {label}
          </label>
        )}
        <Input
          status={status}
          type={type}
          id={id}
          placeholder={placeholder}
          className={AKClsx(styles.AKInput, AKInputClassname)}
          prefix={prefix}
        />
        {status === "error" && errorMessage && (
          <p className="mb-0 mt-1 text-red">{errorMessage}</p>
        )}
      </div>
    </>
  );
};

export default AKInput;
