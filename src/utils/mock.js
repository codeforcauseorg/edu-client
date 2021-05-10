import AxiosMockAdapter from "axios-mock-adapter";
import axios from "./mockaxios";

const instance = new AxiosMockAdapter(axios, { delayResponse: 0 });

export default instance;
