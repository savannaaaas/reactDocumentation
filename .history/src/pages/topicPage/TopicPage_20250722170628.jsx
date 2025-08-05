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
          minHeight: "100vh",
          display: "flex",
          height: "calc(100vh - 64px)",
        }}
      >
        <Grid
          sx={{
            gridColumn: "1",
            width: 240,
            borderRight: "1px solid #ddd",
            overflowY: "auto",
            position: "sticky",
            top: 0,
            height: "100%",
          }}
        >
          <Navigation />
        </Grid>
        <Grid
          sx={{ gridColumn: "2", flexGrow: 1, overflowY: "auto", padding: 2 }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};
