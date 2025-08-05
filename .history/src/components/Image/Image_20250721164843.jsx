export const Image = ({ children, ...props }) => {
  return (
    <Box
      component="img"
      src={reactLogo}
      alt="React logo"
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
