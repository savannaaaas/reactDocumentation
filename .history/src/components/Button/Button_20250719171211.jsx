import ButtonCustom from "@mui/material/Button";
import "../Button/index.scss";
export const Button = ({ children, ...props }) => {
  return <ButtonCustom {...props}>{children}</ButtonCustom>;
};
