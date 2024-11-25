import { useContext, useEffect, useState } from "react";
import { AKClsx } from "@utils";
import { ThemeContext } from "../../contexts/ThemeProvider";
import {
  AKDrawer,
  AKDropDownImg,
  AKModal,
  AKAlert,
  AKPopover,
  AKLabelCard,
} from "@components";
import AKButton from "@components/AKButton";
import {
  notificationList,
  recentSearchData,
  svgIcons,
  userDropItems,
} from "@const";
import styles from "./AKHeader.module.css";
import AKListIcon from "@components/AKUIKits/AKList/AKListIcon";
import AKInput from "@components/AKForms/AKFormControls/AKInputControls/AKInput";

export const AKHeader = () => {
  const {
    setTheme,
    setThemePlate,
    theme,
    headerPaddingLeft,
    sidebarToggle,
    setSidebarToggle,
    sidebarToggleBtn,
    setSidebarToggleBtn,
  } = useContext(ThemeContext);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);

  // default theme color start
  const defaultDarkTheme = "theme-dark-pelican";
  const defaultLightTheme = "theme-light-hen";
  // default theme color end

  // setting drawer start
  const showSettingDrawer = () => {
    setOpenSetting(true);
  };
  const closeSettingDrawer = () => {
    setOpenSetting(false);
  };
  // setting drawer end

  // search modal start
  const handleSearchModalFn = () => {
    setIsSearchModalOpen(true);
  };
  const handleSearchModalCancel = () => {
    setIsSearchModalOpen(false);
  };
  // search modal end

  // theme change start
  const handleThemeChange = (e) => {
    setTheme(e == "light" ? "dark" : "light");
    setThemePlate(e == "light" ? defaultDarkTheme : defaultLightTheme);
  };
  // theme change en

  const toggleSideBarFn = () => {
    setSidebarToggle(!sidebarToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1600) {
        setSidebarToggleBtn(false);
      } else {
        setSidebarToggleBtn(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* header start */}
      <header className={AKClsx(styles.header, "sticky top-0 z-index-999")}>
        <div
          className={styles.mainHeader}
          style={{ paddingLeft: headerPaddingLeft }}
        >
          <div
            className={AKClsx(styles.headerContainer, "flex justify-between")}
          >
            <div className="flex items-center">
              {sidebarToggleBtn && (
                <button
                  className={AKClsx(styles.headerContainerLeft, "mr-4")}
                  onClick={toggleSideBarFn}
                >
                  {sidebarToggle ? svgIcons.close : svgIcons.dashboard}
                </button>
              )}
              <button
                className={styles.headerContainerLeft}
                onClick={handleSearchModalFn}
              >
                {svgIcons.search}
              </button>
            </div>
            <div
              className={AKClsx(
                styles.headerContainerRight,
                "flex items-center"
              )}
            >
              <button
                className={AKClsx(
                  styles.headerElement,
                  styles.headerElementSpacing
                )}
                onClick={() => handleThemeChange(theme)}
              >
                {theme === "light" ? svgIcons.moonClear : svgIcons.sun}
              </button>
              <AKPopover
                content={<AKListIcon items={notificationList} size="sm" />}
                title={"Notifications"}
                placement="bottomLeft"
              >
                <button
                  className={AKClsx(
                    styles.headerElement,
                    styles.notification,
                    styles.headerElementSpacing
                  )}
                >
                  {svgIcons.notification}
                </button>
              </AKPopover>
              <div className={styles.headerElementSpacing}>
                <AKDropDownImg items={userDropItems} />
              </div>
              <button
                className={AKClsx(
                  styles.headerElement,
                  styles.settingBtn,
                  styles.headerElementSpacing
                )}
                onClick={showSettingDrawer}
              >
                {svgIcons.setting}
              </button>
              <AKDrawer
                setOpen={openSetting}
                handleClose={closeSettingDrawer}
                title={"Template Customizer"}
                customClass={styles.offCanvas}
              >
                <AKLabelCard />
              </AKDrawer>
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
      {/* search modal start */}
      <AKModal
        isModalOpen={isSearchModalOpen}
        title="Search"
        handleCancel={handleSearchModalCancel}
        customFooter={[
          <AKButton
            key={"header-Modal"}
            type="fill"
            size="medium"
            handleClick={handleSearchModalCancel}
          >
            close
          </AKButton>,
        ]}
      >
        <div className="py-5">
          <AKInput
            placeholder={"Search..."}
            prefix={svgIcons.search}
            AKInputClassname={"mb-5"}
          />
          <h3 className="text-color mb-4 small">Recent Search</h3>
          {recentSearchData &&
            recentSearchData.map((item, index) => {
              return (
                <AKAlert
                  key={`${item.name}${index}`}
                  type="default"
                  message={item.message}
                  isClosable={true}
                  customClass="mb-3"
                />
              );
            })}
        </div>
      </AKModal>
      {/* search modal end */}
    </>
  );
};
