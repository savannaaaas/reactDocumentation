import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./index.scss";
export const ImportantPoints = (props) => {
  return (
    <Box component="section" className="importantBox">
      <ErrorOutlineIcon sx={{ color: "red", fontSize: 50 }} />
      {props}
    </Box>
  );
};
