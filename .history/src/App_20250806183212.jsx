import { Routes, Route } from "react-router";
import { data } from "./data/data";
import { routes } from "./routes/Routes";
import { lazy } from "react";
import "./index.scss";

export const LazyWelcomePage = lazy(
  () => import("./pages/welcomePage/WelcomePage")
);
export const LazyTopicPage = lazy(() => import("./pages/topicPage/TopicPage"));
export const LazyTopic = lazy(() => import("./pages/topicPage/Topic"));
export const LazyNotFound = lazy(() => import("./pages/notFoundPage/NotFound"));

function App() {
  return (
    <Routes>
      <Route path={routes.MAIN} element={<LazyWelcomePage />} />
      <Route path={routes.TOPIC.BASE} element={<LazyTopicPage />}>
        <Route
          path={routes.TOPIC.COMPONENTS}
          element={
            <LazyTopic
              title={data[0].title}
              content={data[0].content}
              path={data[0].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.PROPS}
          element={
            <LazyTopic
              title={data[1].title}
              content={data[1].content}
              path={data[1].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.STATE}
          element={
            <LazyTopic
              title={data[2].title}
              content={data[2].content}
              path={data[2].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.LIFECYCLE}
          element={
            <LazyTopic
              title={data[3].title}
              content={data[3].content}
              path={data[3].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.EVENTS}
          element={
            <LazyTopic
              title={data[4].title}
              content={data[4].content}
              path={data[4].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.KEY}
          element={
            <LazyTopic
              title={data[5].title}
              content={data[5].content}
              path={data[5].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.REFS}
          element={
            <LazyTopic
              title={data[6].title}
              content={data[6].content}
              path={data[6].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.VIRTUAL_DOM}
          element={
            <LazyTopic
              title={data[7].title}
              content={data[7].content}
              path={data[7].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.FRAGMENT}
          element={
            <LazyTopic
              title={data[8].title}
              content={data[8].content}
              path={data[8].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.REACT_MEMO}
          element={
            <LazyTopic
              title={data[9].title}
              content={data[9].content}
              path={data[9].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.USEEFFECT}
          element={
            <LazyTopic
              title={data[10].title}
              content={data[10].content}
              path={data[10].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.USECONTEXT}
          element={
            <LazyTopic
              title={data[11].title}
              content={data[11].content}
              path={data[11].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.USEMEMO}
          element={
            <LazyTopic
              title={data[12].title}
              content={data[12].content}
              path={data[12].path}
            />
          }
        />
        <Route
          path={routes.TOPIC.REACT_ROUTER}
          element={
            <LazyTopic
              title={data[13].title}
              content={data[13].content}
              path={data[13].path}
            />
          }
        />
      </Route>
      <Route path={routes.NOT_FOUND} element={<LazyNotFound />} />
    </Routes>
  );
}

export default App;
