import { Typography } from "@mui/material";

export const CustomTypography = ({ children, ...props }) => {
  return (
    <Typography variant="h3" {...props}>
      {children}
    </Typography>
  );
};
