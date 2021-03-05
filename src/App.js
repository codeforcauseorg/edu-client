import "./App.css";
import Routes from "./Routes";
import { Router, useHistory } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { SnackbarProvider } from "notistack";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <SnackbarProvider maxSnack={1}>
        <Router history={history}>
          <Auth>
            <Routes />
          </Auth>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
