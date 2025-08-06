import { WelcomeButton } from "./WelcomeButton/WelcomeButton";
import { Header } from "./Header/Header";
import { WelcomeContent } from "./Content/ContentWelcome";
import "./index.scss";
export const LazyWelcomePage = lazy(() => import("./LazyComponent"));
const WelcomePage = () => {
  return (
    <div className={"welcome-page"}>
      <Header />
      <WelcomeContent />
      <WelcomeButton />
    </div>
  );
};
