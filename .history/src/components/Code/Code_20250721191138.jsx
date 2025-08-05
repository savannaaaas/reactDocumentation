import Paper from "@mui/material/Paper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box } from "@mui/material";
export const Code = ({ c }) => {
  const code = `{ name:"Anna", age:15} {kffffffffffffffffffffffffffffffff}`;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};
