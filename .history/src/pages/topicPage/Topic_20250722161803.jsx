import { Typography } from "@mui/material";

import { ImportantPoints } from "../../components/ImportantPoints/ImportantPoints";
import { CustomTypography } from "../../components/Typography/CustomTypography";
import { Fragment } from "react/jsx-runtime";
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
        return <Code>{value}</Code>;
      }
      case "err": {
        return <ImportantPoints>{value}</ImportantPoints>;
      }
    }
  };
  return (
    <>
      <CustomTypography>{title}</CustomTypography>
      {getValue(content).map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </>
  );
};
