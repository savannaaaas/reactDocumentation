import { Typography } from "@mui/material";

export const Text = ({ children, props }) => {
  return (
    <Typography {...props} variant="subtitle1">
      {children}
    </Typography>
  );
};
