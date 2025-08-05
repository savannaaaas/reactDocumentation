import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        {" "}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
