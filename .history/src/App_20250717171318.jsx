import { useContext } from "react";
import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { ThemeContext } from "styled-components";
function App() {
  return (
    <>
      <WelcomePage />
    </>
  );
}

export default App;
