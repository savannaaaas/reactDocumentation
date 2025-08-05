import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { yellow, green, blue } from "@mui/material/colors";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export const Toggle = () => {
  const ThemeSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase": {
      color: blue[600],
      "&:hover": {
        backgroundColor: alpha(blue[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: blue[600],
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: yellow[600],
      "&:hover": {
        backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: yellow[600],
    },
  }));

  return <ThemeSwitch defaultChecked />;
};
