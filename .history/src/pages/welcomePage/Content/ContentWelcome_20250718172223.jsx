import { ThemeContext } from "../../../contexts/ThemeContext";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
import "../index.scss";
export const WelcomeContent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="base-content">
      <Typography fontFamily={"fantasy"} variant="h2">
        Шпаргалка по React
      </Typography>
      <Typography variant="h6" fontFamily={"fantasy"}>
        <p>
          Официальная документация:
          <a href="https://react.dev/" target="_blank">
            {" "}
            React.dev
          </a>
        </p>
        <p>
          на русском:{" "}
          <a href="https://ru.legacy.reactjs.org/" target="_blank">
            {" "}
            Reactjs.org
          </a>
        </p>
      </Typography>
    </div>
  );
};
