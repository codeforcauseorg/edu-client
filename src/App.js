import Routes from "./Routes/index";
import { Router, useHistory } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { SnackbarProvider } from "notistack";
import { createStyles, makeStyles, ThemeProvider } from "@material-ui/core";
import { createTheme } from "./theme/index";
import ScrollToTop from "./components/ScrollComponent";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        width: "100%",
        color: "#000",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
    },
  })
);

function App() {
  useStyles();
  const history = useHistory();

  return (
    <div className="App">
      <ThemeProvider theme={createTheme()}>
        <SnackbarProvider maxSnack={1}>
          <Router history={history}>
            <Auth>
              <ScrollToTop />
              <Routes />
            </Auth>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
