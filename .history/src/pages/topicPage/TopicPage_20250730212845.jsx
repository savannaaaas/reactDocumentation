import { Outlet, useNavigate, useLocation } from "react-router";
import { Header } from "../welcomePage/Header/Header";
import { Navigation } from "../../components/Navigation/Navigation";
import { Grid } from "@mui/material";
import { Button } from "../../components/Button/Button";

export const TopicPage = () => {
  const topicRoutes = ["/topic/components", "/topic/props"];
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);
  const handleGoBack = () => {
    navigate(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <Grid>
            <Grid>
              <Button onClick={handleGoNext}>Next</Button>
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
