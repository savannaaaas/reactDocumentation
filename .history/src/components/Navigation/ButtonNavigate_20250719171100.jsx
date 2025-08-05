import { Button } from "../Button/Button";
import "./index.scss";
export const ButtonNavigate = ({ children, props }) => {
  return (
    <Button {...props} variant="outlined" className="navigate-button">
      {children}
    </Button>
  );
};
