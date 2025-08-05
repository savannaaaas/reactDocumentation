import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import "./index.scss";
export const NavButtons = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoNext = () => {
    navigate(1);
  };
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid>
        <Button onClick={handleGoBack} className="navigate-button">
          Back
        </Button>
      </Grid>
      <Grid>
        <Button onClick={handleGoNext} className="navigate-button">
          Next
        </Button>
      </Grid>
    </Grid>
  );
};
