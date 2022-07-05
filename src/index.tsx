import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { App } from "./App";
import { theme1 } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
