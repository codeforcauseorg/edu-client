import "./App.css";
import Routes from "./Routes";
import { Router, useHistory } from "react-router-dom";
import Auth from "./components/auth/Auth";

function App() {
  const history = useHistory();

  return (
    <div className="App">
      <Router history={history}>
        <Auth>
          <Routes />
        </Auth>
      </Router>
    </div>
  );
}

export default App;
