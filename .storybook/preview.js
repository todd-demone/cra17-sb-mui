import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { theme1, theme2 } from "../src/theme";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "theme1",
    toolbar: {
      icon: "circlehollow",
      items: ["theme1", "theme2"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const getTheme = (themeName) => {
  switch (themeName) {
    case "theme2":
      return theme2;
    default:
      return theme1;
  }
};

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
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
