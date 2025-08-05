import { Typography } from "@mui/material";
import "./index.scss";

export const BoldText = ({ children, props }) => {
  return <Typography {...props}>{children}</Typography>;
};
