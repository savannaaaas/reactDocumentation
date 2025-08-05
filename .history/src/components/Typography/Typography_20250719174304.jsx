import CustomTypography from "@mui/material";
export const Typography = ({ children, ...props }) => {
  return (
    <CustomTypography variant="h1" {...props}>
      {children}
    </CustomTypography>
  );
};
