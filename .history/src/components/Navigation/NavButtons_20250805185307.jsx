import { Button, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data } from "../../data/data";
import "./index.scss";
import { NavLink, useNavigate } from "react-router";
export const NavButtons = ({ title }) => {
  const navigate = useNavigate();
  const getCurrentTopic = (title) => {
    return topics.findIndex((topic) => topic.title == title);
  };
  return (
    <>
      <Button
        variant="contained"
        className="navigate-button"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={() => navigate(-1)}
      >
        <NavLink className="navigate-button">Back topic</NavLink>
      </Button>
      {/* )} */}
      {/* {next && ( */}
      <Button
        variant="contained"
        className="navigate-button"
        endIcon={<ArrowForwardIosIcon />}
        onClick={() => navigate("")}
      >
        <NavLink className="navigate-button">Next topic</NavLink>
      </Button>
    </>
  );

  // const topics = data.map((e) => {
  //   const { title, path } = e;
  //   return { title, path };
  // });
  // const getCurrentTopic = (title) => {
  //   return topics.findIndex((topic) => topic.title == title);
  // };
  // const getBackNextTopic = (title) => {
  //   const current = getCurrentTopic(title);
  //   const back = current > 0 ? topics[current - 1] : null;
  //   const next = current < topics.length - 1 ? topics[current + 1] : null;
  //   return (
  //     <>
  //       {/* {back && ( */}

  //       {/* )} */}
  //     </>
  //   );
  // };
  // return <div className="buttons">{getBackNextTopic(title)}</div>;
};
