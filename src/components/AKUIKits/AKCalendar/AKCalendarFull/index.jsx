import { AKClsx } from "@utils";
import { Calendar } from "antd";
import styles from "./AKCalendarFull.module.css";
export const AKCalendarFull = ({
  id,
  AKCalendarFullClassname,
}) => {
  return (
    <>
      <Calendar
        id={id}
        className={AKClsx(styles.AKCalendarFull, AKCalendarFullClassname)}
        onPanelChange={""}
      />
    </>
  )
}