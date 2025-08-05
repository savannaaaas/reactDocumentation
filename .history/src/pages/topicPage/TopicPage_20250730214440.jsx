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
      window.scrollTo({ top: 0, behavior: "smooth" }); // Запасной вариант
    }
  }, [location.pathname]);
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoNext = () => {
    // navigate(1);
    // window.scrollTo({ top: 0, behavior: "smooth" });
    const currentIndex = topicRoutes.indexOf(location.pathname);
    if (currentIndex !== -1 && currentIndex < topicRoutes.length - 1) {
      navigate(topicRoutes[currentIndex + 1]);
    } else {
      console.log("Следующая страница отсутствует");
    }
  };

  return (
    <>
      <Header ref={headerRef} />
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
          <Grid>
            <Grid>
              <Link onClick={handleGoNext}>Next</Link>
            </Grid>
            <Grid>
              <Button onClick={handleGoBack}>Back</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
