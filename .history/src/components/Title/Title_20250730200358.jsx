import { Typography } from "@mui/material";
import "./index.scss";
export const Title = ({ children }) => {
  return (
    <Typography variant="h6" className="title">
      {children}
    </Typography>
  );
};
