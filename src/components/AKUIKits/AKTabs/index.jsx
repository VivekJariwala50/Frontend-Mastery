import { Tabs } from "antd";
import styles from "./AKTabs.module.css";
import { useEffect, useState } from "react";
export const AKTabs = ({
  handleChange,
  items,
  centered,
  tabPosition,
  defaultActiveKey = "1",
}) => {
  const [tabPositionState, setTabPositionState] = useState(tabPosition);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setTabPositionState(tabPosition);
      } else {
        tabPositionState == "bottom"
          ? setTabPositionState(tabPosition)
          : setTabPositionState("top");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Tabs
      centered={centered}
      defaultActiveKey={defaultActiveKey}
      items={items}
      onChange={handleChange}
      className={styles.tab}
      tabPosition={tabPositionState}
    />
  );
};
