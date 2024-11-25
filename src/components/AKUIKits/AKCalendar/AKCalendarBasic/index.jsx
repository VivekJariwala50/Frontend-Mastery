import { AKClsx } from "@utils";
import { Calendar } from "antd";
import styles from "./AKCalendarBasic.module.css";

export const AKCalendarBasic = ({
  id,
  AKCalendarMiniClassName,
  handleChange,
  ...rest
}) => {
  return (
    <>
      <div>
        <Calendar
          id={id}
          className={AKClsx(styles.AKCalendarMini, AKCalendarMiniClassName)}
          fullscreen={false}
          onPanelChange={handleChange}
          {...rest}
        />
      </div>
    </>
  );
};
