import axios from "axios";
import {store} from "../App"

const instance = axios.create({
  baseURL:'https://movieknightweb.azurewebsites.net',
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
 // withCredentials: true,
});



instance.interceptors.request.use(
  config => {
   const token = (sessionStorage.getItem("token") != null) ? JSON.parse(sessionStorage.getItem("token")) : null;
      const state = store.getState();
      let accessToken = null;

      if (state.user.user != null) {
          accessToken = state.user.user.token;
      }

      if (token) {
          accessToken = token;
      }

      if (accessToken != null) {
          config.headers.Authorization = `Bearer ${accessToken}`;
      }

    return config;
  },
  err => Promise.reject(err)
);


export default instance;
