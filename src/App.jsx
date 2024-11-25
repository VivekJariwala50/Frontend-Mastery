import { Suspense, useContext, useEffect } from "react";
// Routing
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// Antd for Config
import { Spin, ConfigProvider } from "antd";
// ThemeProvider Context
import { ThemeContext } from "./contexts/ThemeProvider";
// Styles
import "./assets/stylesheets/styles.css";
function App() {
  const {
    theme,
    direction,
    themePlate,
    setPrimaryColor,
    setEagleColor,
    setHenColor,
    sidebarToggle,
  } = useContext(ThemeContext);

  // SET THEME  START
  useEffect(() => {
    document.getElementsByTagName("html")[0].dataset.theme = theme;
  }, [theme]);

  // SET THEME END

  useEffect(() => {
    document.getElementsByTagName("html")[0].dataset.themePlate = themePlate;
    var rootData = document.querySelector(":root");
    var computedColor = getComputedStyle(rootData);
    const updatedKingFisherColor =
      computedColor.getPropertyValue("--kingfisher");
    const updatedEagleColor = computedColor.getPropertyValue("--eagle");
    const updatedHenColor = computedColor.getPropertyValue("--hen");
    setPrimaryColor(updatedKingFisherColor);
    setEagleColor(updatedEagleColor);
    setHenColor(updatedHenColor);
  }, [themePlate]);

  // SET DIRECTION START

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.direction = direction;
  }, [direction]);

  // SET DIRECTION END

  // SET SIDEBAR START

  useEffect(() => {
    document.getElementsByTagName("html")[0].dataset.sidebarShow =
      sidebarToggle;
  }, [sidebarToggle]);

  // SET SIDEBAR END

  return (
    <>
      <div className={theme.name}>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Nunito, Segoe UI, Arial, sans-serif",
            },
          }}
        >
          <Suspense fallback={<Spin />}>
            <RouterProvider router={router} />
          </Suspense>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
