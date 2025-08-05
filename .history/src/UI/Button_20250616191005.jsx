import { Button } from "@mui/material/Button";
export const ButtonCustom = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
