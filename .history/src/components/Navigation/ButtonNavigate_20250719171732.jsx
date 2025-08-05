import { color } from "@mui/system";
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
        border: "1px #ffff solid",
        color: "#ffff",
      }}
    >
      {children}
    </Button>
  );
};
