import { AKClsx } from "@utils";
import { Avatar, List } from "antd";
import clsx from "clsx";
import styles from "./AKBasicList.module.css";
export const AKBasicList = ({ data, customClass, customContentClass }) => {
  return (
    <List
      className={clsx(styles.list, customClass)}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={item.title}
            description={item.description}
          />
          {item.content && (
            <div className={AKClsx(styles.content, customContentClass)}>
              {item.content}
            </div>
          )}
        </List.Item>
      )}
    />
  );
};
