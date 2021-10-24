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
    console.log(config);
   const state = JSON.parse(sessionStorage.getItem("user"));
    let accessToken = null;
    console.log(accessToken);
    console.log(state.token)
    if(state != null){
      accessToken = state.token;
    }
    console.log(accessToken);
   if (accessToken != null) {
     config.headers.Authorization = `bearer ${accessToken}`;
   }
    return config;
  },
  err => Promise.reject(err)
);


export default instance;
