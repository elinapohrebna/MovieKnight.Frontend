import axios from "axios";
import {store} from "../App"

const instance = axios.create({
  baseURL:'https://movieknightweb.azurewebsites.net',
  timeout: 4000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
 // withCredentials: true,
});



instance.interceptors.request.use(
  config => {
   const token = JSON.parse(sessionStorage.getItem("user")).token;
      const state = store.getState();
      let accessToken = null;
      if (state.user.user != null) {
          accessToken = state.user.user.token;

      }
      if (token) {
          accessToken = token;
      }
      console.log(accessToken);
      if (accessToken != null) {
          config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;

    return config;
  },
  err => Promise.reject(err)
);


export default instance;
