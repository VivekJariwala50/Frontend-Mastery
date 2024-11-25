import { AKClsx } from "@utils";
import { Select } from "antd";
import styles from "./AKSelect.module.css";
export const AKSelect = ({
  defaultValue,
  handleChange,
  isOpen,
  dropdownClass,
  selectClass,
  options,
  placeholder,
  suffixIcon,
  label,
  id,
  AKSelectlabelClassName,
  variant = "outlined",
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className={AKClsx(styles.AKInputLabel, AKSelectlabelClassName)}
        >
          {label}
        </label>
      )}
      <Select
        popupClassName={AKClsx(styles.dropdown, dropdownClass)}
        open={isOpen}
        defaultValue={defaultValue}
        style={{
          width: "100%",
        }}
        className={AKClsx(styles.select, selectClass)}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        suffixIcon={suffixIcon}
        variant={variant}
      />
    </div>
  );
};
