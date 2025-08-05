import { useState } from "react";
import { Button, Grid } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data } from "../../data/data";
import "./index.scss";
import { NavLink, useNavigate } from "react-router";
export const NavButtons = ({ title }) => {
  const navigate = useNavigate();
  const [currentTitle, setCurrentTitle] = useState(title);
  // const location = useLocation();
  // console.log(location.pathname);
  const topics = data.map((e) => {
    const { title, path } = e;
    return { title, path };
  });
  const getCurrentTopic = (title) => {
    return topics.findIndex((topic) => topic.title == title);
  };
  const getNextTopic = () => {
    const current = getCurrentTopic(currentTitle);

    if (current >= 0 && current < topics.length - 1) {
      const nextTopic = current + 1;
      setCurrentTitle(nextTopic);
      navigate(`/topic/${topics[nextTopic].path}`);
    }
  };
  const getBackTopic = () => {
    const current = getCurrentTopic(currentTitle);

    if (current > 0) {
      const backTopic = topics[current - 1];
      setCurrentTitle(backTopic);
      navigate(`/topic/${topics[backTopic - 1].path}`);
    }
  };
  return (
    <div className="buttons">
      <Button
        variant="contained"
        className="navigate-button"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={getBackTopic}
      >
        <NavLink className="navigate-button">Back topic</NavLink>
      </Button>
      <Button
        variant="contained"
        className="navigate-button"
        endIcon={<ArrowForwardIosIcon />}
        onClick={getNextTopic}
      >
        <NavLink className="navigate-button">Next topic</NavLink>
      </Button>
    </div>
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
