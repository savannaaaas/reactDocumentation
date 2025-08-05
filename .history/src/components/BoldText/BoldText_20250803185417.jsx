import { Typography } from "@mui/material";

export const BoldText = ({ children, props }) => {
  return (
    <Typography {...props} style={{ fontWeight: "bold" }}>
      {children}
    </Typography>
  );
};
