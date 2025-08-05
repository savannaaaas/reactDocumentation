import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";

export const NavButtons = () => {
  const navigate = useNavigate();
  return (
    <Grid sx={{ display: "flex", flexDirection: "row" }}>
      <Grid>
        <Button onClick={handleGoBack}>Back</Button>
      </Grid>
      <Grid>
        <Button onClick={handleGoNext}>Next</Button>
      </Grid>
    </Grid>
  );
};
