import { Typography } from "@mui/material";
import "./index.scss";

export const BoldText = ({ children }) => {
  return <Typography className="textBold">{children}</Typography>;
};
