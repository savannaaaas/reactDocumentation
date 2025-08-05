import GitHubIcon from "@mui/icons-material/GitHub";
import { Image } from "../../../components/Image/Image";
import { Toggle } from "../../../components/Toggle/Toggle";
import reactLogo from "../../../assets/react.svg";
import "../index.scss";
import { IconButton } from "@mui/material";

export const Header = () => {
  return (
    <div className="header">
      <IconButton
        href="https://github.com/savannaaaas"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image src={reactLogo} style={{ width: "60px" }} />
      </IconButton>

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
