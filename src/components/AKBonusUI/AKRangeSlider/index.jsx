import { AKClsx } from "@utils";
import { InputNumber, Slider } from "antd";
import styles from "./AKRangeSlider.module.css";

export const AKRangeSlider = ({
  defaultValue,
  minValue,
  maxValue,
  disabled,
  marks,
  steps,
  handleChange,
  AKRangeSliderClassName,
  showInput,
  inputValue,
  ...rest
}) => {
  return (
    <div>
      <Slider
        marks={marks}
        defaultValue={defaultValue}
        min={minValue}
        max={maxValue}
        step={steps}
        disabled={disabled}
        onChange={handleChange}
        className={AKClsx(styles.AKRangeSlider, AKRangeSliderClassName)}
        {...rest}
      />
      {showInput && (
        <InputNumber
          className={styles.AKSliderInputNumber}
          onChange={handleChange}
          value={inputValue}
        />
      )}
    </div>
  );
};
