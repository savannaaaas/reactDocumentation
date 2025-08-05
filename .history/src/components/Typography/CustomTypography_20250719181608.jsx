import { Typography } from "@mui/material";
import "./index.module.scss";
export const CustomTypography = ({ children, ...props }) => {
  return (
    <Typography variant="h3" {...props} className="typography">
      {children}
    </Typography>
  );
};
