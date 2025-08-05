import { Routes, Route } from "react-router";

import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { ThemeContext } from "./contexts/ThemeContext";

import "./index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/topic" element={<TopicPage />}>
        <Route path="/" element={<TopicPage />} />
      </Route>
    </Routes>
  );
}

export default App;
