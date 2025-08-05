import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { NavLink, useNavigate } from "react-router";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { ButtonNavigate } from "../../components/Navigation/ButtonNavigate";
import "./index.scss";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <Typography variant="h3" sx={{ color: "rgb(227, 153, 153)" }}>
        Page not found
      </Typography>
      <SentimentVeryDissatisfiedIcon
        sx={{ color: "rgb(227, 153, 153)", fontSize: "150px" }}
      />
      <Grid sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Grid>
          <Button
            variant="outlined"
            component={NavLink}
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
          <ButtonNavigate></ButtonNavigate>
        </Grid>
        <Grid>
          <ButtonNavigate component={NavLink} to="/">
            Return to home
          </ButtonNavigate>
        </Grid>
      </Grid>
    </div>
  );
};
