import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { SettingsProvider } from "./context/SettingsContext";
import { configureStore } from "./store";
import { restoreSettings } from "./utils/settings";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./mock";

const store = configureStore();
const settings = restoreSettings();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SettingsProvider>
  </Provider>,
  document.getElementById("root")
);
