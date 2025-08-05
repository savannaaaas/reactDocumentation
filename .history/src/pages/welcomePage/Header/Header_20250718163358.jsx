import { useContext } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import reactLogo from "../assets/react.svg";
import { Image } from "../UI/Image";
import { Toggle } from "./Toggle";

export const Header = () => {
  return (
    <div className="header">
      <Image src={reactLogo} alt="React logo" style={{ width: "60px" }} />
      <Toggle />
      <GitHubIcon sx={{ fontSize: "60px" }} />
    </div>
  );
};
