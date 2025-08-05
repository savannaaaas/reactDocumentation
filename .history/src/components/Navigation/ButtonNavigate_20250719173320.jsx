import { Button } from "../Button/Button";
import "./index.scss";
export const ButtonNavigate = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      variant="outlined"
      sx={{
        width: "200px",
        fontSize: "14px",
        borderRadius: "40px",
        border: "1px rgba(236, 141, 156, 1) solid",
        color: "rgba(236, 141, 156, 1)",
        "&.active": {
          backgroundColor: "rgba(249, 108, 129, 1)",
        },
      }}
    >
      {children}
    </Button>
  );
};
