import clsx from "clsx";
import { List, Typography } from "antd";
import styles from "./AKSimpleList.module.css";
export const AKSimpleList = ({ data, size, customClass, typographyText }) => {
  return (
    <List
      size={size}
      className={clsx(styles.list, customClass)}
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item className="title-color">
          {typographyText && (
            <Typography.Text mark>
              {typographyText === "number" ? `${index + 1}.` : typographyText}
            </Typography.Text>
          )}{" "}
          {item}
        </List.Item>
      )}
    />
  );
};
