export const Image = ({ children, ...props }) => {
  return (
    <Box
      component="img"
      href="https://react.dev/learn"
      {...props}
      sx={{
        width: "60px",
        "&:hover": {
          filter: "brightness(0.7)",
        },
      }}
    >
      {children}
    </Box>
  );
};
