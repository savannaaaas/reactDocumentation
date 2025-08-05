import { Outlet } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
export const TopicPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
};
