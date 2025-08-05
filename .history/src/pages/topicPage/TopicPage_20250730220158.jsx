import { useEffect, useRef } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";
import { Button } from "../../components/Button/Button";

export const TopicPage = () => {
  const topicRoutes = ["/topic/components", "/topic/props"];
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef();
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // Запасной вариант
    }
  }, [location.pathname]);
  const handleGoBack = () => {
    navigate(-1);
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleGoNext = () => {
    navigate(1);
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header>
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
