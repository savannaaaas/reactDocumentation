import { Outlet } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";

export const TopicPage = () => {
  return (
    <>
      <Header />
      <Grid container direction="row">
        <Grid>
          <Navigation />
        </Grid>
        <Grid>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};
