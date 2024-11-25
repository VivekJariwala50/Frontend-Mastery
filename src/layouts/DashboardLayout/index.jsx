import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { AKSidebar } from "../../components/AKSidebar";
import { useState, useEffect, useContext } from "react";
import { AKHeader } from "../../components/AKHeader";
import styles from "./DashboardLayout.module.css";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { sidebarMenuItems } from "@const";

export const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [marginLeft, setMarginLeft] = useState("var(--sidebar-width)");

  const { sidebarToggle, setHeaderPaddingLeft } = useContext(ThemeContext);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        {
          !collapsed
            ? setMarginLeft("var(--sidebar-width)")
            : setMarginLeft("var(--sidebar-width-collapsed)");
        }
      } else {
        setMarginLeft("0");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [collapsed]);

  useEffect(() => {
    sidebarToggle === true
      ? setHeaderPaddingLeft("75px")
      : setHeaderPaddingLeft("20px");
  }, [sidebarToggle]);

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <AKSidebar
        collapsed={collapsed}
        handleSidebarCollapsed={(value) => setCollapsed(value)}
        items={sidebarMenuItems}
      />
      <Layout
        style={{ marginLeft: marginLeft }}
        className={styles.AKContentLayout}
      >
        <AKHeader />
        <main className={styles.AKMainContent}>
          <Outlet />
        </main>
      </Layout>
    </Layout>
  );
};
