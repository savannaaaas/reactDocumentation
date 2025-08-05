import { Outlet } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";

export const TopicPage = () => {
  return (
    <>
      <Header />
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          minHeight: "100vh", // чтобы контент не выходил вниз
        }}
      >
        <Grid sx={{ width: 240 }}>
          <Navigation />
        </Grid>
        <Grid>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};
