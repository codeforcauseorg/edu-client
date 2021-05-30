import AxiosMockAdapter from "axios-mock-adapter";
import axios from "./mockaxios";

const instance = new AxiosMockAdapter(axios, { delayResponse: 3000 });

export default instance;
