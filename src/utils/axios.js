import axios from "axios";

const instance = axios.create({
  baseURL:'https://localhost:5001',
  timeout: 4000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
 // withCredentials: true,
});


export default instance;
