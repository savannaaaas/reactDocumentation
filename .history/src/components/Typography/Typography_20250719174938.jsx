import { Typography } from "@mui/material";
export const CustomTypography = ({ children, ...props }) => {
  return (
    <Typography variant="h1" {...props}>
      {children}
    </Typography>
  );
};
