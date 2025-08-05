import { Typography } from "@mui/material";
import { data } from "../../data/data";
export const Topic = ({ title, content = [] }) => {
  const getValue = (content) => {
    const [[key, value]] = Object.entries(content);
    switch (key) {
      case "p": {
        return <Typography variant="subtitle1">{value}</Typography>;
      }
      case "h": {
        return <Typography variant="h6">{value}</Typography>;
      }
      case "c": {
        <Code>{value}</Code>;
      }
    }
  };
};
