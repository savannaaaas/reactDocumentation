import { useEffect, useState } from "react";
import { themes, ThemeContext } from "../contexts/ThemeContext";
const getTheme = () => {
  const theme = `${window?.localStorage.getItem("theme")}`; //получаем тему из хранилища
  if (Object.values(themes).includes(theme)) {
    //если тема такая есть возвращаем
    return theme;
  }
  const userMedia = window.matchMedia("(prefers-color-scheme: light)"); //если в хранилище нет смотрим какую тему пользователь предпочитает
  if (userMedia.matches) return themes.light; //проверяем предпочитает пользователь светлую тему если да возвр
  return themes.dark; //иначе темная
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
