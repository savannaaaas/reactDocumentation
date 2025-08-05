import { useEffect } from "react";
import { useContext } from "react";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { ThemeContext } from "./contexts/ThemeContext";
import { themes } from "./contexts/ThemeContext";
import "./index.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Routes>
      <WelcomePage />
    </Routes>
  );
}

export default App;
