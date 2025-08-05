import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { black, pink } from "@mui/material/colors";
export const Toggle = () => {
  const ThemeSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase": {
      color: black[600],
      "&:hover": {
        backgroundColor: alpha(black[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: black[600],
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
