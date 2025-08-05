import { useState } from "react";
import { themes, ThemeContext } from "./ThemeContext";
const getTheme = () => {};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
