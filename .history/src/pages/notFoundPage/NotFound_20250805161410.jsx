import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { ButtonNavigate } from "../../components/Navigation/ButtonNavigate";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <p>Page not found</p>
      <SentimentVeryDissatisfiedIcon
        sx={{ color: "rgb(227, 153, 153)", fontSize: "150px" }}
      />
      <Grid sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Grid>
          <ButtonNavigate></ButtonNavigate> <NavLink>Go back</NavLink>
        </Grid>
        <Grid>
          <NavLink to="/">Return to home</NavLink>
        </Grid>
      </Grid>
    </div>
  );
};
