import axios from "axios";
import {store} from "../App"

const instance = axios.create({
  baseURL:'https://localhost:5001',
  timeout: 4000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
 // withCredentials: true,
});



instance.interceptors.request.use(
  config => {
    const state = store.getState();
    console.log(state);
    const accessToken = state.user.token;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  err => Promise.reject(err)
);


export default instance;
