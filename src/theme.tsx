import { createTheme } from "@mui/material/styles";

export const theme1 = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#556cd6",
    // },
    secondary: {
      main: "#007FC4",
    },
    warning: {
      main:'#0A948F',
    },
    // background: {
    //   default: "#000",
    // },
  },
});

export const theme2 = createTheme({
  palette: {
    primary: {
      main: "#092D5C",
    },
    secondary: {
      main: "#007FC4",
    },
    warning: {
      main: "#0A948F",
    },
    // background: {
    //   default: "#fff",
    // },
  },
});
