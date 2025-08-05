import { Button, Grid } from "@mui/material";

export const NavButtons = () => {
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
