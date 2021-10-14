import axios from "../utils/axios";
import { instanceForLogging } from "../utils/axios";

export const authenticate = async user => {
    try {
      const {
        data,
       // headers: { access_token },
      } = await axios.post("/api/Auth/token", user);
      return { user: data };
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  export const getCurrentUser = async () => {
    try {
      const response = await axios.get("/api/Auth/token");
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };