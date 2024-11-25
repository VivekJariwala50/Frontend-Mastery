import { AKClsx } from "@utils";
import { Tooltip } from "antd";
import styles from "./AKTooltip.module.css";
export const AKTooltip = ({
  children,
  placement,
  title,
  trigger,
  AKTooltipClassName,
  ...rest
}) => {
  return (
    <>
      <div>
        <Tooltip
          title={title}
          placement={placement}
          trigger={trigger}
          className={AKClsx(styles.AKTooltip, AKTooltipClassName)}
          {...rest}
        >
          {children}
        </Tooltip>
      </div>
    </>
  );
};
