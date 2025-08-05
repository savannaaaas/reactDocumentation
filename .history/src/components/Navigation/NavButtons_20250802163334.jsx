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
    return topics.findIndex((topic) => topic.title === title);
  };
  const getNext;
};
