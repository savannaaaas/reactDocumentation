import { Button } from "../Button/Button";
import "./index.scss";
export const ButtonNavigate = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="outlined"
      className="navigate-button"
      sx={{
        width: "200px",
        fontSize: "14px",
        borderRadius: "40px",
        border: "1px rgb(242, 118, 138) solid",
        color: "rgb(242, 118, 138)",
      }}
    >
      {children}
    </Button>
  );
};
