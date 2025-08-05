import { Button } from "@mui/material/Button";
export const Button = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};
