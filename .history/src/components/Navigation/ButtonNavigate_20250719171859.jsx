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
        border: "1px rgba(236, 141, 156, 1) solid",
        color: "rgba(247, 139, 157, 1)",
      }}
    >
      {children}
    </Button>
  );
};
