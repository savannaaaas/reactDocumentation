import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "../../../components/Button/Button";

export const WelcomeButton = () => {
  return (
    <Button variant="contained" size="large" endIcon={<FavoriteIcon />}>
      К темам
    </Button>
  );
};
backgroundColor: "rgb(245, 60, 91)",
        color: "white",
        padding: "10 30px",
        width: "170px",
        borderRadius: "30px",
