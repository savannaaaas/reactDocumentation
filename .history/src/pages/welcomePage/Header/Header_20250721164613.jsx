import GitHubIcon from "@mui/icons-material/GitHub";
import reactLogo from "../../../assets/react.svg";
import { Image } from "../../../components/Image/Image";
import { Toggle } from "../../../components/Toggle/Toggle";
import "../index.scss";

export const Header = () => {
  return (
    <div className="header">
      <Box
        component="img"
        src={reactLogo}
        alt="React logo"
        sx={{
          width: "60px",
          transition: "0.3s",
          "&:hover": {
            filter: "brightness(0.7)",
          },
        }}
      />

      <Toggle />
      <a
        href="https://github.com/savannaaaas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon
          sx={{
            fontSize: "60px",
            color: "black",
            "&:hover": {
              color: "#d81b60",
            },
          }}
        />
      </a>
    </div>
  );
};
