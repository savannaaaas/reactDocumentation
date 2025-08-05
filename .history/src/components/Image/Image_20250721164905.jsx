export const Image = ({ children, ...props }) => {
  return (
    <Box
      component="img"
      {...props}
      sx={{
        width: "60px",
        transition: "0.3s",
        "&:hover": {
          filter: "brightness(0.7)",
        },
      }}
    />
  );
};
