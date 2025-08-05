import { useContext } from "react";
import { WelcomeButton } from "../components/WelcomeButton";
import { Header } from "../components/Header";
import { WelcomeContent } from "../components/ContentWelcome";

export const WelcomePage = () => {
  return (
    <div className={"welcome-page"}>
      <Header />
      <WelcomeContent />
      <WelcomeButton />
    </div>
  );
};
