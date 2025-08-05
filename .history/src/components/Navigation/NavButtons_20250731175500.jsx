import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
        gap: "20px",
      }}
    >
      <Grid>
        <Button
          variant="contained"
          onClick={handleGoBack}
          className="navigate-button"
        >
          <ArrowBackIosNewIcon />
          Back
        </Button>
      </Grid>
      <Grid>
        <Button
          variant="contained"
          onClick={handleGoNext}
          className="navigate-button"
        >
          Next <ArrowForwardIosIcon />
        </Button>
      </Grid>
    </Grid>
  );
};
