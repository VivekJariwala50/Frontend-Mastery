import { AKClsx } from "@utils";
import { Switch } from "antd";
import styles from "./AKSwitch.module.css";
export const AKSwitch = ({
  id,
  handleChange,
  AKSwitchClassName,
  size,
  checkedChildren,
  unCheckedChildren,
  ...rest
}) => {
  return (
    <Switch
      id={id}
      className={AKClsx(styles.AkSwitch, AKSwitchClassName)}
      onChange={handleChange}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
      size={size}
      {...rest}
    />
  );
};
