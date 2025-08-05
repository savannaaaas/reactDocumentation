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
  function scrollToElementWithOffset(selector, offset = 0) {
    const el = document.querySelector(selector);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }
  //Everytime when change pathname
  useEffect(() => {
    // const customTypography = document.querySelector(".custom-typography");

    scrollToElementWithOffset(".custom-typography", -120);
    //   }
    // }
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
            padding: 2,
            overflowY: "auto",
          }}
          className="scrollable-content"
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
});
