import Paper from "@mui/material/Paper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
export const Code = ({ c }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
    </Box>
  );
};
