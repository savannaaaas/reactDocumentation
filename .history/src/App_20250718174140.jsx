import { useContext } from "react";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { ThemeContext } from "./contexts/ThemeContext";
import "./index.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === themes.light ? "light" : "dark"
    );
  }, [theme]);
  return (
    <>
      <WelcomePage />
    </>
  );
}

export default App;
