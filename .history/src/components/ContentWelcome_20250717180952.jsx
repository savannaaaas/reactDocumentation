import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const WelcomeContent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "light-content" : "dark-content"}>
      <Typography fontFamily={"fantasy"} variant="h2">
        Шпаргалка по React
      </Typography>
      <Typography variant="h6" fontFamily={"fantasy"}>
        <p>
          Официальная документация:
          <a href="https://react.dev/"> React.dev</a>
        </p>
        <p>
          на русском: <a href="https://ru.legacy.reactjs.org/"> Reactjs.org</a>
        </p>
      </Typography>
    </div>
  );
};
