import { Box } from "@mui/material";
export const Image = ({ sx, ...props }) => {
  return (
    <Box
      component="img"
      {...props}
      sx={{
        fontSize: "60px",
        color: "black",
        "&:hover": {
          color: "#d81b60",
        },
        ...sx,
      }}
    />
  );
};
