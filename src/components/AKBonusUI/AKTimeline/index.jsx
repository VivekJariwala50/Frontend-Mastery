import { Timeline } from "antd";
import styles from "./AKTimeline.module.css";
const AKTimeline = ({ items }) => {
  return <Timeline className={styles.timeline} items={items} />;
};

export default AKTimeline;
