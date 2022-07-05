import { StyleProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme1, theme2 } from "../src/theme";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "theme1",
    toolbar: {
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["theme1", "theme2"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

// const getTheme = (themeName) => {
//   switch (themeName) {
//     case "theme2":
//       return theme2;
//     default:
//       return theme1;
//   }
// };

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
