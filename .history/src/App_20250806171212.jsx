import { Routes, Route } from "react-router";
import { data } from "./data/data";
import { routes } from "./routes/Routes";
import { WelcomePage } from "./pages/welcomePage/WelcomePage";
import { TopicPage } from "./pages/topicPage/TopicPage";
import { Topic } from "./pages/topicPage/Topic";
import { NotFound } from "./pages/notFoundPage/NotFound";
import "./index.scss";

function App() {
  return (
    <Routes>
      <Route path={routes.MAIN} element={<WelcomePage />} />
      <Route path={routes.ALLTOPIC} element={<TopicPage />}>
        <Route
          path={routes.COMPONENTS}
          element={
            <Topic
              title={data[0].title}
              content={data[0].content}
              path={data[0].path}
            />
          }
        />
        <Route
          path={routes.PATH}
          element={
            <Topic
              title={data[1].title}
              content={data[1].content}
              path={data[1].path}
            />
          }
        />
        <Route
          path={routes.STATE}
          element={
            <Topic
              title={data[2].title}
              content={data[2].content}
              path={data[2].path}
            />
          }
        />
        <Route
          path={routes.LIFECYCLE}
          element={
            <Topic
              title={data[3].title}
              content={data[3].content}
              path={data[3].path}
            />
          }
        />
        <Route
          path={routes.EVENTS}
          element={
            <Topic
              title={data[4].title}
              content={data[4].content}
              path={data[4].path}
            />
          }
        />
        <Route
          path={routes.KEY}
          element={
            <Topic
              title={data[5].title}
              content={data[5].content}
              path={data[5].path}
            />
          }
        />
        <Route
          path={routes.REFS}
          element={
            <Topic
              title={data[6].title}
              content={data[6].content}
              path={data[6].path}
            />
          }
        />
        <Route
          path={routes.VIRTUALDOM}
          element={
            <Topic
              title={data[7].title}
              content={data[7].content}
              path={data[7].path}
            />
          }
        />
        <Route
          path={routes.FRAGMENT}
          element={
            <Topic
              title={data[8].title}
              content={data[8].content}
              path={data[8].path}
            />
          }
        />
        <Route
          path={}
          element={
            <Topic
              title={data[9].title}
              content={data[9].content}
              path={data[9].path}
            />
          }
        />
        <Route
          path="useEffect"
          element={
            <Topic
              title={data[10].title}
              content={data[10].content}
              path={data[10].path}
            />
          }
        />
        <Route
          path="useContext"
          element={
            <Topic
              title={data[11].title}
              content={data[11].content}
              path={data[11].path}
            />
          }
        />
        <Route
          path="useMemo"
          element={
            <Topic
              title={data[12].title}
              content={data[12].content}
              path={data[12].path}
            />
          }
        />
        <Route
          path="react-router"
          element={
            <Topic
              title={data[13].title}
              content={data[13].content}
              path={data[13].path}
            />
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
