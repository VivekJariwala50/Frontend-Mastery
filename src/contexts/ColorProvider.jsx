import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [kingfisherColor, setKingfisherColor] = useState("#5C21A0");

  return (
    <ColorContext.Provider
      value={{
        kingfisherColor,
        setKingfisherColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
