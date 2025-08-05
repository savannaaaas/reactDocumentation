import { Typography } from "@mui/material";
import "./index.scss";
export const Text = ({ children, props }) => {
  return (
    <Typography {...props} variant="subtitle1">
      {children}
    </Typography>
  );
};
