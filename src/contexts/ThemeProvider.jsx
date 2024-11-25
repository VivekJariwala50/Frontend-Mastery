import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const initialTheme = localStorage.getItem("theme");
    const initialDirection = localStorage.getItem("direction");

    const [theme, setTheme] = useState(() => { return initialTheme ? initialTheme : "dark" });

    const defaultDarkTheme = "theme-dark-pelican";
    const defaultLightTheme = "theme-light-hen";

    const [direction, setDirection] = useState(() => { return initialDirection ? initialDirection : "ltr" });

    const [themePlate, setThemePlate] = useState(() => { return theme == "dark" ? defaultDarkTheme : defaultLightTheme });

    const [primaryColor, setPrimaryColor] = useState("#5C21A0");

    const [eagleColor, setEagleColor] = useState("#7367F0");

    const [henColor, setHenColor] = useState("#7367F0");

    const [sidebarToggleBtn, setSidebarToggleBtn] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);

    const [headerPaddingLeft, setHeaderPaddingLeft] = useState(0);

    // direction start

    useEffect(() => {
        setDirectionFn();
    }, [direction]);

    // direction start

    const setDirectionFn = () => {
        localStorage.setItem("direction", direction);
    }

    // direction end

    // set theme start

    useEffect(() => {
        localStorage.setItem("theme", theme);
        initialThemePlate();
    }, [theme]);

    const initialThemePlate = () => {
        return theme == "dark" ? defaultDarkTheme : defaultLightTheme
    }

    // set theme end

    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    setTheme,
                    direction,
                    setDirection,
                    themePlate,
                    setThemePlate,
                    primaryColor,
                    setPrimaryColor,
                    eagleColor,
                    setEagleColor,
                    setHenColor,
                    henColor,
                    sidebarToggleBtn,
                    setSidebarToggleBtn,
                    sidebarToggle,
                    setSidebarToggle,
                    headerPaddingLeft,
                    setHeaderPaddingLeft
                }
            }
        >
            {children}
        </ThemeContext.Provider>
    )

}

export default ThemeProvider;