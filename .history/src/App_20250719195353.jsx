import { Routes, Route } from "react-router";

import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { TopicPage } from "./pages/topicPage/TopicPage";
import { ComponentPage } from "./pages/componentPage/ComponentPage";

import "./index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/topic" element={<TopicPage />}>
        <Route path="components" element={<ComponentPage />} />
        <Route path="code" element={<Code />} />
      </Route>
    </Routes>
  );
}

export default App;
