import { ContentComponent } from "../componentPage/Content/ContentComponent";
import { ImportantPoints } from "../../components/importantPoints/ImportantPoints";
export const ComponentPage = () => {
  console.log("ComponentPage");
  return (
    <>
      <ContentComponent />
      <ImportantPoints />
    </>
  );
};
