import { AKClsx } from "@utils";
import { Breadcrumb } from "antd";
import styles from "./AKBreadcrumb.module.css";
export const AKBreadcrumb = ({
  items,
  separator,
  AKBreadcrumbClassname,
  ...rest
}) => {
  return (
    <Breadcrumb
      items={items}
      separator={separator}
      className={AKClsx(styles.AKBreadcrumb, AKBreadcrumbClassname)}
      {...rest}
    />
  )
}
