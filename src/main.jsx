import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "remixicon/fonts/remixicon.css";
import "antd-css-utilities/utility.min.css";
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import ColorProvider from "./contexts/ColorProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </ThemeProvider>
  </React.StrictMode>
);
