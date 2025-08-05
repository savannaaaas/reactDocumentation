import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const ThemeSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase": {
      color: grey[600],
      "&:hover": {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: grey[600],
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  return <ThemeSwitch defaultChecked />;
};
// if (theme === themes.light) setTheme(themes.dark);
// if (theme === themes.dark) setTheme(themes.light);
