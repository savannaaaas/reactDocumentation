import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { NavLink } from "react-router";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
export const NotFound = () => {
  return (
    <div className="not-found">
      <p>Page not found</p>
      <SentimentVeryDissatisfiedIcon
        sx={{ color: "rgb(227, 153, 153)", fontSize: "150px" }}
      />
      <Grid sx={{ display:"flex" gap: "20px" }}>
        <Grid>
          <NavLink>Go back</NavLink>
        </Grid>
        <Grid>
          <NavLink to="/">Return to home</NavLink>
        </Grid>
      </Grid>
    </div>
  );
};
