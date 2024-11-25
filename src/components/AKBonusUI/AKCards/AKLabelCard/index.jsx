import { useContext, useEffect, useState } from "react";
import { AKThemePlate } from "@components";
import { themeColors } from "@const";
import { ThemeContext } from "../../../../contexts/ThemeProvider";
import { AKRadio } from "../../../AKForms/AKFormControls/AKRadio";

export const AKLabelCard = () => {
  const { theme, setTheme, setDirection, setThemePlate, direction } =
    useContext(ThemeContext);
  const [displayTheme, setDisplayTheme] = useState(themeColors);

  const defaultDarkTheme = "theme-dark-pelican";
  const defaultLightTheme = "theme-light-hen";

  const handleThemeChange = (e) => {
    setTheme(e.target.value == "light" ? "light" : "dark");
    setThemePlate(
      e.target.value == "light" ? defaultLightTheme : defaultDarkTheme
    );
  };

  const handleDirectionChange = (e) => {
    setDirection(e.target.value == "rtl" ? "rtl" : "ltr");
  };

  const handleThemePlateChange = (e) => {
    setThemePlate(e.target.value);
  };

  useEffect(() => {
    var tempData = [];
    themeColors &&
      themeColors.forEach((themeData) => {
        if (themeData.mode == theme) {
          tempData.push(themeData);
        }
      });
    setDisplayTheme(() => tempData);
  }, [theme]);

  return (
    <>
      <div>
        <h4 className="bg-owl text-color pa-2">Theme Color Mode:</h4>
        <div className="pa-5 mb-0">
          <AKRadio
            handleChange={handleThemeChange}
            defaultValue={theme}
            radioItems={[
              {
                name: "dark",
                value: "dark",
              },
              {
                name: "light",
                value: "light",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <h4 className="bg-owl text-color pa-2">Directions:</h4>
        <div className="pa-5 mb-0">
          <AKRadio
            handleChange={handleDirectionChange}
            defaultValue={direction}
            radioItems={[
              {
                name: "LTR",
                value: "ltr",
              },
              {
                name: "RTL",
                value: "rtl",
              },
            ]}
          />
        </div>
      </div>
      <div>
        <h4 className="bg-owl text-color pa-2">Theme Colors:</h4>
        <div className="pa-5 mb-0">
          <AKThemePlate
            themeColors={displayTheme}
            handleChange={handleThemePlateChange}
          />
        </div>
      </div>
    </>
  );
};
