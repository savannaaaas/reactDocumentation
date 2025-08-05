import { Routes, Route } from "react-router";
import { Code } from "./components/Code/Code";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { TopicPage } from "./pages/topicPage/TopicPage";
import "./index.scss";
import { data } from "./data/data";
import { Topic } from "./pages/topicPage/Topic";
function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/topic" element={<TopicPage />}>
        <Route
          path="components"
          element={<Topic title={data[0].title} content={data[0].content} />}
        />
        <Route path="props" element={}/>
      </Route>
    </Routes>
  );
}

export default App;
