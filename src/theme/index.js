import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";
import { softShadows } from "./shadows";

const baseConfig = {
  direction: "ltr",
  typography,
  overrides: {
    MuiLinearProgress: {
      root: {
        borderRadius: 3,
        overflow: "hidden",
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 32,
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "rgba(0,0,0,0.075)",
      },
    },
  },
};

const themeConfig = {
  name: "LIGHT",
  overrides: {
    MuiInputBase: {
      input: {
        "&::placeholder": {
          opacity: 1,
          color: colors.blueGrey[600],
        },
      },
    },
  },
  palette: {
    type: "light",
    action: {
      active: colors.blueGrey[600], //small icons
    },
    background: {
      default: colors.common.white,
      dark: "#f4f6f8",
      paper: colors.common.white, // background
    },
    primary: {
      main: colors.indigo[600], // for header and loader
    },
    secondary: {
      main: "#A60000", // for button and selected
    },
    text: {
      // for text classes
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows: softShadows,
};

const createTheme = () => {
  let theme = createMuiTheme(_.merge({}, baseConfig, themeConfig, { direction: "ltr" }));

  theme = responsiveFontSizes(theme);

  return theme;
};

export { createTheme };
