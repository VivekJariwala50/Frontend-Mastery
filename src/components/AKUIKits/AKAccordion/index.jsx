import { AKClsx } from "@utils";
import { Collapse } from "antd";
import styles from "./AKAccordion.module.css";

export const AKAccordion = ({
  items,
  size,
  defaultActiveKey,
  AKAccordionClassname,
  expandIcon,
  expandIconPosition,
  ...rest
}) => {
  return (
    <>
      <Collapse
        accordion
        items={items}
        defaultActiveKey={defaultActiveKey}
        size={size}
        className={AKClsx(styles.AKAccordion, AKAccordionClassname)}
        expandIcon={expandIcon}
        expandIconPosition={expandIconPosition}
        {...rest}
      />
    </>
  )
}
