import Paper from "@mui/material/Paper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Code = ({ c }) => {
  const code = `{ name:"Anna", age:15}`;
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
      <Paper elevation={0}>
        <SyntaxHighlighter language="javascript" style={oneDark}>
          {code}
        </SyntaxHighlighter>
      </Paper>
    </Box>
  );
};
