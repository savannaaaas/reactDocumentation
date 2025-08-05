import { Typography } from "@mui/material";
import "./index.scss";
export const CustomTypography = ({ children, ...props }) => {
  return (
    <Typography variant="h4" {...props}>
      {children}
    </Typography>
  );
};
