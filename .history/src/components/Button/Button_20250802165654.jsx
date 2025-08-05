import React from "react";
import ButtonCustom from "@mui/material/Button";
export const Button = React.memo(({ children, ...props }) => {
  return <ButtonCustom {...props}>{children}</ButtonCustom>;
});
