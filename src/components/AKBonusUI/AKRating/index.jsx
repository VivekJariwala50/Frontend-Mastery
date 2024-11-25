import { AKClsx } from "@utils";
import { Rate } from "antd";
import styles from "./AKRating.module.css";
export const AKRating = ({
  value,
  defaultValue,
  character,
  allowClear,
  allowHalf,
  tooltips,
  handleChange,
  AKRatingClassname,
  ...rest
}) => {
  return (
    <Rate
      value={value}
      defaultValue={defaultValue}
      character={character}
      allowClear={allowClear}
      allowHalf={allowHalf}
      tooltips={tooltips}
      onChange={handleChange}
      className={AKClsx(styles.AKRating, AKRatingClassname)}
      {...rest}
    />
  );
};

export default AKRating;
