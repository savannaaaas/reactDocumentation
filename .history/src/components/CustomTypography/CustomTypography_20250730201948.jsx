import { Typography } from "@mui/material";
import "./index.scss";
export const CustomTypography = ({ children, ...props }) => {
  return (
    <div {...props} className="typography">
      {children}
    </div>
  );
};
