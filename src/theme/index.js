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
      active: "#5C6C8D", // small icons
      hover: "#F8F8F8",
    },
    background: {
      default: colors.common.white,
      dark: "#f4f6f8",
      paper: colors.common.white, // background
    },
    primary: {
      main: "#3740A1", // for header and loader
    },
    secondary: {
      default: "#900A0A",
      main: "#51BFA5",
    },
    error: {
      main: "#FF9D9D",
    },
    text: {
      // for text classes
      primary: "#2D303F",
      secondary: "#5C6C8D",
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
