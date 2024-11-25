import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./AKDropDownSimple.module.css";
import { AKClsx } from "@utils";
export const AKDropDownSimple = ({
  title,
  open,
  items,
  textOnly,
  label,
  customClass,
  placement,
  icon = <DownOutlined />,
  customDropdownMenuClass,
  dropMore,
}) => {
  return (
    <Dropdown
      menu={{ items }}
      open={open}
      className={AKClsx(
        styles.dropDwn,
        styles.dropDwnStyle,
        textOnly && styles.textOnly,
        label && styles.label,
        customClass,
        dropMore && styles.dropMore
      )}
      overlayClassName={AKClsx(styles.customDropdown, customDropdownMenuClass)}
      placement={placement}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {title}
          {icon}
        </Space>
      </a>
    </Dropdown>
  );
};
