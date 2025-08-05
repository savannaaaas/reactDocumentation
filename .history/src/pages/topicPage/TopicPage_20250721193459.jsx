import { Outlet } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { data } from "../../data/data";
export const TopicPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
};
