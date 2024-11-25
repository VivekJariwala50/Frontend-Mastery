import { AKClsx } from "@utils";
import { Popover } from "antd";
import styles from "./AKPopover.module.css";
export const AKPopover = ({
  content,
  children,
  title,
  trigger,
  placement,
  open,
  ...rest
}) => {
  return (
    <>
      <Popover
        content={content}
        title={title}
        trigger={trigger}
        placement={placement}
        {...rest}
        className={AKClsx(styles.popover)}
        overlayClassName={AKClsx(styles.customOverlayClass)}
        open={open}
      >
        {children}
      </Popover>
    </>
  )
}
