import { Typography } from "@mui/material";
export const CustomTypography = ({ children, ...props }) => {
  return (
    <Typography
      variant="h1"
      {...props}
      style={{ background: "yellow", color: "black", padding: "1rem" }}
    >
      {children}
    </Typography>
  );
};
