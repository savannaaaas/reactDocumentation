import { Typography } from "@mui/material";
import { data } from "../../data/data";
export const Topic = ({ title, content = [] }) => {
  const getValue = (content) => {
    const [[key, value]] = Object.entries(content);
    switch (key) {
      case "p": {
        return <Typography variant>{}</Typography>;
      }
    }
  };
};
