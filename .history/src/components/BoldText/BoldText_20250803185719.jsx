import { Typography } from "@mui/material";
import "./index.scss";

export const BoldText = ({ children, props }) => {
  return (
    <Typography {...props} className="text-bold">
      {children}
    </Typography>
  );
};
