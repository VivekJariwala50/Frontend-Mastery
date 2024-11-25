import { Tag } from "antd";
import clsx from "clsx";
import styles from "./AKTags.module.css";

const AKTags = ({ color, title, customClass, pills, icon }) => {
  return (
    <Tag
      color={color}
      className={clsx(styles.tag, customClass, pills && styles.pills)}
      icon={icon}
    >
      {title}
    </Tag>
  );
};

export default AKTags;
