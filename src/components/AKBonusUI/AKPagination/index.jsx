import { AKClsx } from "@utils";
import { Pagination } from "antd";
import styles from "./AKPagination.module.css";
export const AKPagination = ({
  totalSize,
  size,
  handleChange,
  onShowSizeChange,
  AKPaginationClassname,
  ...rest
}) => {
  return (
    <div>
      <Pagination
        defaultCurrent={1}
        total={totalSize}
        size={size}
        onChange={handleChange}
        onShowSizeChange={onShowSizeChange}
        className={AKClsx(styles.AKPagination, AKPaginationClassname)}
        {...rest}
      />
    </div>
  );
};
