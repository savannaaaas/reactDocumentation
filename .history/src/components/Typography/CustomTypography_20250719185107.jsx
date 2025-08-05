import { Typography } from "@mui/material";

export const CustomTypography = ({ children, ...props }) => {
  return (
    <Typography variant="h4" {...props}>
      {children}
    </Typography>
  );
};
