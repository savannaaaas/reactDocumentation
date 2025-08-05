import GitHubIcon from "@mui/icons-material/GitHub";
import reactLogo from "../../../assets/react.svg";
import { Image } from "../../../components/Image/Image";
import { Toggle } from "../../../components/Toggle/Toggle";
import "../index.scss";

export const Header = () => {
  return (
    <div className="header">
      <Image src={reactLogo} alt="React logo" />
      <Toggle />
      <Image
        href="https://github.com/savannaaaas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon />
      </Image>
    </div>
  );
};
