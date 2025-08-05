import GitHubIcon from "@mui/icons-material/GitHub";
import reactLogo from "../../../assets/react.svg";
import { Image } from "../../../components/Image/Image";
import { Toggle } from "../../../components/Toggle/Toggle";
import "../index.scss";

export const Header = () => {
  return (
    <div className="header">
      <Image
        src="https://via.placeholder.com/60"
        alt="React logo"
        style={{ width: "60px" }}
      />
      <Toggle />
      <GitHubIcon sx={{ fontSize: "60px" }} />
    </div>
  );
};
