import { Button } from "../Button/Button";
export const ButtonNavigate = ({ children, props }) => {
  return (
    <Button {...props} variant="outlined" style={{}}>
      {children}
    </Button>
  );
};
