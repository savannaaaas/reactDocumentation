import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "../../../components/Button/Button";

export const WelcomeButton = () => {
  return (
    <Button
      variant="contained"
      size="large"
      className="welcome-button"
      endIcon={<FavoriteIcon />}
    >
      К темам
    </Button>
  );
};
