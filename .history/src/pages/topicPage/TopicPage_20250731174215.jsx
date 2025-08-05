import { useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";
import { Button } from "../../components/Button/Button";

export const TopicPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    document.querySelector(".custom-typography").scrollIntoView(false);
    // document
    //   .querySelector(".active")
    //   .scrollIntoView({ inline: "center", behavior: "smooth" });
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoNext = () => {
    navigate(1);
  };

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
          <Grid sx={{ display: "flex", flexDirection: "row" }}>
            <Grid>
              <Button onClick={handleGoBack}>Back</Button>
            </Grid>
            <Grid>
              <Button onClick={handleGoNext}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
