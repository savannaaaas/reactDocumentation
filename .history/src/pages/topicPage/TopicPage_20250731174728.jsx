import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";
import { NavButtons } from "../../components/Navigation/NavButtons";

export const TopicPage = () => {
  const location = useLocation();
  //Everytime when change pathname
  useEffect(() => {
    document.querySelector(".custom-typography").scrollIntoView(false);
    // document
    //   .querySelector(".active")
    //   .scrollIntoView({ inline: "center", behavior: "smooth" });
  }, [location.pathname]);
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
          <NavButtons />
        </Grid>
      </Grid>
    </>
  );
};
