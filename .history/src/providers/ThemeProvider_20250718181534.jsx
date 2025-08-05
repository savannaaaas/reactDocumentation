import { useEffect, useState } from "react";
import { themes, ThemeContext } from "../contexts/ThemeContext";
const getTheme = () => {
  const theme = `${window?.localStorage.getItem("theme")}`; //получаем тему из хранилища
  if (Object.values(themes).includes(theme)) {
    //если тема такая есть возвращаем
    return theme;
  } //если в хранилище нет смотрим какую тему пользователь предпочитает
  const userMedia = window.matchMedia("(prefers-color-scheme: light)"); //проверяем предпочитает пользователь светлую тему если да возвр
  if (userMedia.matches) return themes.light;
  return themes.dark; //иначе темная
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme; // добавляем атрибут data-theme на <html>
    localStorage.setItem("theme", theme); //устанавливаем текущую тему
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
