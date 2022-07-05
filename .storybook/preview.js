import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../src/theme";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "darkTheme",
    toolbar: {
      icon: "circlehollow",
      items: ["darkTheme", "lightTheme"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const getTheme = (themeName) => {
  switch (themeName) {
    case "lightTheme":
      return lightTheme;
    default:
      return darkTheme;
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
