import styles from "./AKRangePicker.module.css";
import { DatePicker } from "antd";
import { AKClsx } from "@utils";
const { RangePicker } = DatePicker;

export const AKRangePicker = ({
  id,
  label,
  labelClassName,
  AKRangePickerClassName,
  handleChange,
  placeholder,
  suffixIcon,
  status,
  errorMessage,
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={AKClsx(styles.AKRangePickerLabel, labelClassName)}
        >
          {label}
        </label>
      )}
      <RangePicker
        id={id}
        placeholder={placeholder}
        status={status}
        suffixIcon={suffixIcon}
        onChange={handleChange}
        className={AKClsx(styles.AKRangePicker, AKRangePickerClassName)}
      />
      {status === "error" && errorMessage && (
        <p className="mb-0 mt-1 text-red">{errorMessage}</p>
      )}
    </div>
  );
};
