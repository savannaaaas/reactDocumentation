import GitHubIcon from "@mui/icons-material/GitHub";
import ReactLogo from "../../../assets/react.svg";
import { Image } from "../../../components/Image/Image";
import { Toggle } from "../../../components/Toggle/Toggle";
import "../index.scss";
import { IconButton } from "@mui/material";

export const Header = () => {
  return (
    <div className="header">
      <ReactLogo style={{ width: 60, height: 60 }} />

      <Toggle />
      <IconButton
        href="https://github.com/savannaaaas"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: "black",
          "&:hover": {
            color: "#d81b60",
          },
        }}
      >
        <GitHubIcon
          sx={{
            fontSize: "60px",
          }}
        />
      </IconButton>
    </div>
  );
};
