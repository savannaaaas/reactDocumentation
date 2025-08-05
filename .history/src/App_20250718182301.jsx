import { Routes, Route } from "react-router";
import { useContext } from "react";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { ThemeContext } from "./contexts/ThemeContext";

import "./index.scss";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <Routes>
      <Route />
      <WelcomePage />
    </Routes>
  );
}

export default App;
