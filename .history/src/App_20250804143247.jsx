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
        <Route
          path="events"
          element={
            <Topic
              title={data[4].title}
              content={data[4].content}
              path={data[4].path}
            />
          }
        />
        <Route
          path="key"
          element={
            <Topic
              title={data[5].title}
              content={data[5].content}
              path={data[5].path}
            />
          }
        />
        <Route
          path="refs"
          element={
            <Topic
              title={data[6].title}
              content={data[6].content}
              path={data[6].path}
            />
          }
        />
        <Route path="virtual-dom" />
      </Route>
    </Routes>
  );
}

export default App;
