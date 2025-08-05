import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { ContentComponent } from "../componentPage/Content/ContentComponent";
export const ComponentPage = () => {
  return (
    <>
      <Header />
      <ContentComponent />
      <Navigation />
    </>
  );
};
