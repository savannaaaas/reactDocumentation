import { useContext } from "react";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { ThemeContext } from "./contexts/ThemeContext";
import "./index.scss";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <WelcomePage />
    </>
  );
}

export default App;
