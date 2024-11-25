import { AKClsx } from "@utils";
import { Spin } from "antd";
import styles from "./AKBasicLoader.module.css";
export const AKBasicLoader = ({
  size,
  AKLoaderClassname,
  ...rest
}) => {
  return (
    <Spin
      size={size}
      className={AKClsx(styles.AKBasicLoader, AKLoaderClassname)}
      {...rest}
    />
  )
}
