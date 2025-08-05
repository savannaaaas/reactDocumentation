import { Button } from "../Button/Button";
export const ButtonNavigate = ({ children, props }) => {
  return (
    <Button {...props} variant="outlined" style={{ width: "300px" }}>
      {children}
    </Button>
  );
};
