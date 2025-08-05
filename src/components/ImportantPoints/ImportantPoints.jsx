import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./index.scss";
export const ImportantPoints = ({ children }) => {
  return (
    <Box component="section" className="importantBox">
      <ErrorOutlineIcon sx={{ color: "red", fontSize: 50 }} />
      {children}
    </Box>
  );
};
