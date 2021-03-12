// or get from process.env.REACT_APP_{var} to handle PROD and DEV environments
export const APP_VERSION = "2.0.0";
export const API_BASE_URL = "/api";
export const ENABLE_REDUX_LOGGER = false;

let config = { APP_VERSION, API_BASE_URL, ENABLE_REDUX_LOGGER };

export default config;
