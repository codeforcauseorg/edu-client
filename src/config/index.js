// or get from process.env.REACT_APP_{var} to handle PROD and DEV environments
export const APP_VERSION = process.env.REACT_APP_APP_VERSION;
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const ENABLE_REDUX_LOGGER = process.env.REACT_APP_ENABLE_REDUX_LOGGER;

const config = { APP_VERSION, API_BASE_URL, ENABLE_REDUX_LOGGER };

export default config;
