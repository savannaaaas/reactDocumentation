import { Button } from "../../components/Button/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const WelcomeButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "rgb(245, 60, 91)",
        color: "white",
        padding: "10 30px",
        width: "170px",
        borderRadius: "30px",
      }}
      size="large"
      endIcon={<FavoriteIcon />}
    >
      К темам
    </Button>
  );
};
