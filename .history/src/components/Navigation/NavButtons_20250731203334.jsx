import { Button, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data } from "../../data/data";
import "./index.scss";
import { NavLink } from "react-router";
export const NavButtons = ({ title }) => {
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
          >
            <NavLink to={"/topic/" + back.path} className="navigate-button ">
              Back
            </NavLink>
          </Button>
        )}
        {next && (
          <Button
            variant="contained"
            className="navigate-button"
            endIcon={<ArrowForwardIosIcon />}
          >
            <NavLink
              to={"/topic/" + next.path}
              className="navigate-button link"
            >
              Next
            </NavLink>
          </Button>
        )}
      </>
    );
  };
  return <div>{getBackNextTopic(title)}</div>;
};
