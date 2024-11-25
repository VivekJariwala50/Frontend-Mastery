import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./AKSidebar.module.css";
import { AKClsx } from "@utils";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { svgIcons } from "@const";

export const AKSidebar = ({
  handleSidebarCollapsed,
  collapsed,
  items,
  ...rest
}) => {
  const { sidebarToggleBtn } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const subMenuList = {
    main: [
      "/dashboard/nft",
      "/dashboard/analytics",
      "/dashboard/e-commerce",
      "/dashboard/academy",
      "/dashboard/crm",
      "/dashboard/logistics",
    ],
    pages: [
      "/authentication/login",
      "/authentication/register",
      "/authentication/verify-email",
    ],
    forms: ["/dashboard/input-controls", "/dashboard/checkbox-radio"],
    tables: ["/dashboard/basic-table", "/dashboard/advanced-table"],
  };

  let selectedsubMenu = [],
    subMenuName = [];
  for (const [subMenuTitle, subMenuItems] of Object.entries(subMenuList)) {
    const selectedMenuData = subMenuItems?.some((subItems) => {
      if (pathname.includes(subItems)) {
        subMenuName.push(subItems);
      }
      return pathname.includes(subItems);
    });
    if (selectedMenuData) {
      selectedsubMenu.push(subMenuTitle);
      break;
    }
  }

  let selectMenuItem = [];
  let selectItem = null;

  if (selectItem) {
    selectMenuItem.push(selectItem.key);
  }

  return (
    <Sider
      breakpoint="xxl"
      collapsible
      collapsed={collapsed}
      onCollapse={handleSidebarCollapsed}
      style={{
        overflow: "auto",
        height: "calc(100vh - var(--sidebar-trigger-height))",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      width={"var(--sidebar-width)"}
      className={AKClsx(
        styles.AKSidebar,
        sidebarToggleBtn && styles.AKSidebarUpdate
      )}
      collapsedWidth="var(--sidebar-width-collapsed)"
      {...rest}
    >
      <div className={styles.AKSidebarLogoWrapper}>
        <Link to={"/"} className={AKClsx(styles.AKSidebarLogo, "p-0")}>
          {collapsed == false ? svgIcons.logo : <span className={AKClsx(styles.sidebarSmallLogo, "block w-full")}>{svgIcons.shortLogo}</span>}
        </Link>
      </div>
      <Menu
        mode="inline"
        items={items}
        className={styles.AKSidebarMenu}
        selectedKeys={
          subMenuName.length !== 0
            ? subMenuName
            : selectMenuItem.length !== 0
              ? selectMenuItem
              : [pathname]
        }
        onSelect={({ key }) => {
          navigate(key);
        }}
      />
    </Sider>
  );
};
