import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";

export const TopicPage = React.memo(() => {
  const location = useLocation();
  const hasContent =
    location.pathname.startsWith("/topic/") || location.pathname !== "/topic";
  //Everytime when change pathname
  useEffect(() => {
    const customTypography = document.querySelector(".custom-typography");
    if (customTypography) {
      customTypography.scrollIntoView({ behavior: "smooth" });
    }
    // const activeElement = document.querySelector(".active");
    // if (activeElement) {
    //   activeElement.scrollIntoView({ inline: "center", behavior: "smooth" });
    // }
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Grid
        sx={{
          display: "flex",
          height: "calc(100vh - 64px)",
          marginTop: "100px",
        }}
      >
        <Grid
          sx={{
            width: hasContent ? "30vw" : "15vw",
            borderRight: "1px solid #ddd",
            overflowY: "auto",
            position: "sticky",
            top: 0,
            height: "100%",
            minWidth: 150,
            maxWidth: 300,
          }}
        >
          <Navigation />
        </Grid>
        <Grid
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            padding: 2,
            top: 0,
            height: "100%",
            minWidth: 150,
            maxWidth: 300,
          }}
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
});
