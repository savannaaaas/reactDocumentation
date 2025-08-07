import { Routes, Route } from "react-router";
import { data } from "./data/data";
import { routes } from "./routes/Routes";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading/Loading";
import "./index.scss";

const LazyWelcomePage = lazy(() => import("./pages/welcomePage/WelcomePage"));
const LazyTopicPage = lazy(() => import("./pages/topicPage/TopicPage"));
const LazyTopic = lazy(() => import("./pages/topicPage/Topic"));
const LazyNotFound = lazy(() => import("./pages/notFoundPage/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={routes.MAIN} element={<LazyWelcomePage />} />
        <Route path={routes.TOPIC.BASE} element={<LazyTopicPage />}>
          {data.map(({ title, content, path }) => {
            return (
              <Route
                path={path}
                element={<LazyTopic title={title} content={content} />}
              />
            );
          })}
        </Route>
        <Route path={routes.NOT_FOUND} element={<LazyNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
