import ButtonCustom from "@mui/material/Button";
import "../index.scss";
export const Button = ({ children, ...props }) => {
  return <ButtonCustom {...props}>{children}</ButtonCustom>;
};
