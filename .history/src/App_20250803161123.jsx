import { Routes, Route } from "react-router";
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
          element={
            <Topic
              title={data[0].title}
              content={data[0].content}
              path={data[0].path}
            />
          }
        />
        <Route
          path="props"
          element={
            <Topic
              title={data[1].title}
              content={data[1].content}
              path={data[1].path}
            />
          }
        />
        <Route
          path="state"
          element={
            <Topic
              title={data[2].title}
              content={data[2].content}
              path={data[2].path}
            />
          }
        />
        <Route
          path="lifecycle"
          element={
            <Topic
              title={data[3].title}
              content={data[3].content}
              path={data[3].path}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
