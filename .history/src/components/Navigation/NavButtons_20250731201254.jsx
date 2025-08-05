import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data } from "../../data/data";
import "./index.scss";
export const NavButtons = ({ title }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleGoNext = () => {
    navigate(1);
  };
  const topics = data.map((e) => {
    const { title, path } = e;
    return { title, path };
  });
  const getCurrentTopic = (title) => {
    return topics.findIndex((topic) => topic.title == title);
  };
  const getBackNextTopic = (title) => {
    const current = getCurrentTopic(title);
    const back = current > 0 ? topics[current - 1] : null;
    const next = current < topics.length - 1 ? topics[current + 1] : null;
    return (
      <>
        {back && (
          <Button
            variant="contained"
            className="navigate-button"
            startIcon={<ArrowBackIosNewIcon />}
            onClick={handleGoBack}
          >
            Back
          </Button>
        )}
        {next && (
          <Button
            variant="contained"
            className="navigate-button"
            endIcon={<ArrowForwardIosIcon />}
            onClick={handleGoNext}
          >
            Next
          </Button>
        )}
      </>
    );
  };

  //<Grid
  //   sx={{
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     gap: "20px",
  //     margin: "30px",
  //   }}
  // >
  //   <Grid>
  //
  //   </Grid>
  //   <Grid>
  //
  //   </Grid>
  // </Grid>

  return <div>{getBackNextTopic(title)}</div>;
};
