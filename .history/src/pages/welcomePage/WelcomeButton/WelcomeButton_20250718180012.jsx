import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "../../../components/Button/Button";

export const WelcomeButton = () => {
  return (
    <Button variant="contained" size="large" endIcon={<FavoriteIcon />}>
      К темам
    </Button>
  );
};
