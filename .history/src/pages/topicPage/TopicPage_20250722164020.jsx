import { Outlet } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";
import {Item}
export const TopicPage = () => {
  return (
    <>
      <Header />
      <Grid flexDirection={"row"}>
        <Grid>
          <Navigation />
        </Grid>
        <Item>
          <Outlet />
        </Item>
      </Grid>
    </>
  );
};
