import { AKClsx } from "@utils";
import { DatePicker } from "antd";
import styles from "./DatePickerBasic.module.css";

export const AKDatePickerBasic = ({
  id,
  label,
  labelClassName,
  AKDatePickerClassName,
  handleChange,
  placeholder,
  pickerType,
  suffixIcon,
  status,
  errorMessage,
  ...rest
}) => {
  return (
    <>
      <div>
        {label && (
          <label
            htmlFor={id}
            className={AKClsx(styles.AKRangePickerLabel, labelClassName)}
          >
            {label}
          </label>
        )}
        <DatePicker
          id={id}
          status={status}
          picker={pickerType}
          placeholder={placeholder}
          className={AKClsx(styles.AKDatePickerBasic, AKDatePickerClassName)}
          onChange={handleChange}
          suffixIcon={suffixIcon}
          {...rest}
        />
        {status === "error" && errorMessage && (
          <p className="mb-0 mt-1 text-red">{errorMessage}</p>
        )}
      </div>
    </>
  );
};
