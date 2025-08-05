import { Box } from "@mui/material";
export const Image = ({ ...props }) => {
  return (
    <Box
      component="img"
      {...props}
      sx={{
        color: "black",
        "&:hover": {
          color: "#d81b60",
        },
      }}
    />
  );
};
