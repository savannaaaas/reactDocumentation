import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Box } from "@mui/material";
export const Code = React.memo(({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {children}
      </SyntaxHighlighter>
    </Box>
  );
});
