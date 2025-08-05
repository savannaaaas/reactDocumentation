import { Outlet, useNavigate } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";
import { Button } from "../../components/Button/Button";

export const TopicPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Grid
        sx={{
          display: "flex",
          height: "calc(100vh - 64px)",
        }}
      >
        <Grid
          sx={{
            width: 450,
            borderRight: "1px solid #ddd",
            overflowY: "auto",
            position: "sticky",
            top: 0,
            height: "100%",
          }}
        >
          <Navigation />
        </Grid>
        <Grid sx={{ flexGrow: 1, overflowY: "auto", padding: 2 }}>
          <Outlet />
        </Grid>
        <Grid>
          <Grid>
            <Button onClick={() => navigate()}>Next</Button>
          </Grid>
          <Grid>
            <Button>Back</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
