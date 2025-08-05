export const Image = ({ ...props }) => {
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
