import { useContext } from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { ThemeContext } from "./components/ThemeContext";
function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  localStorage.getItem("theme", theme);
  return (
    <>
      <WelcomePage />
    </>
  );
}

export default App;
