import { Routes, Route } from "react-router";
import { Code } from "./components/Code/Code";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { TopicPage } from "./pages/topicPage/TopicPage";
import { ComponentPage } from "./pages/componentPage/ComponentPage";
import { ImportantPoints } from "./components/importantPoints/ImportantPoints";
import "./index.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/topic" element={<TopicPage />}>
        <Route path="components" element={<ComponentPage />} />
        <Route path="code" element={<Code />} />
        <Route path="important" element={<ImportantPoints />} />
      </Route>
    </Routes>
  );
}

export default App;
