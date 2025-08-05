import { useEffect, useState } from "react";
import { themes, ThemeContext } from "../contexts/ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  const getTheme = () => {
    const theme = `${window?.localStorage.getItem("theme")}`;
    if (Object.values(themes).includes(theme)) {
      return theme;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) return themes.light;
    return themes.dark;
  };
  useEffect(() => {
    document.documentElement.dataset.theme = "dark";
    localStorage.setTheme("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
