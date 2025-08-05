import { useState } from "react";
import { themes, ThemeContext } from "./ThemeContext";
const getTheme = () => {
  const theme = `${window?.localStorage.getItem("theme")}`;
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
