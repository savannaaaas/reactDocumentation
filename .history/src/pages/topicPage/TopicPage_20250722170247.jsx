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
          minHeight: "100vh",
        }}
      >
        <Grid sx={{ gridColumn: "1" }}>
          <Navigation />
        </Grid>
        <Grid sx={{ gridColumn: "1" }}>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};
