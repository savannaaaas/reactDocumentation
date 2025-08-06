import React from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";

function TopicPage{
  const location = useLocation();
  function scrollToElementWithOffset(
    containerSelector,
    elementSelector,
    offset = 0
  ) {
    const container = document.querySelector(containerSelector);
    const el = container?.querySelector(elementSelector);
    if (container && el) {
      const top = el.offsetTop + offset;
      container.scrollTo({ top, behavior: "smooth" });
    }
  }
  useEffect(() => {
    scrollToElementWithOffset(
      ".scrollable-content",
      ".custom-typography",
      -120
    );
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Grid
        sx={{
          display: "flex",
          height: "calc(100vh - 64px)",
          flexWrap: "nowrap",
        }}
      >
        <Grid
          sx={{
            width: "250px",
            minWidth: "150px",
            maxWidth: "300px",
            borderRight: "1px solid #ddd",
            overflowY: "auto",
            position: "sticky",
            top: 0,
            height: "100%",
            flexShrink: 0,
          }}
        >
          <Navigation />
        </Grid>
        <Grid
          sx={{
            flexGrow: 1,
            minWidth: 0,
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
};
export default TopicPage