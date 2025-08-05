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
<a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">
  <img {...props} />
  {children}
</a>;
