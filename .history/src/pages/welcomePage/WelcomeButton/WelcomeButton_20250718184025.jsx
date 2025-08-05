import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "../../../components/Button/Button";
import { useNavigate } from "react-router";

export const WelcomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/topic/components");
  };
  return (
    <Button
      variant="contained"
      size="large"
      className="welcome-button"
      endIcon={<FavoriteIcon />}
      onClick={handleClick}
    >
      К темам
    </Button>
  );
};
