import axios from "../utils/axios";
import { instanceForLogging } from "../utils/axios";

export const authenticate = async user => {
    try {
      const {
        data,
      } = await axios.post("/api/Auth/token", user);
      return { user: data };
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  export const getCurrentUser = async () => {
    try {
      const response = await axios.get("/api/Auth/user-info");
      return response.data;
    } catch (error) {
      throw new Error(error.response);
    }
  };

  export const create = async data => {
    try {
      const clientURIForEmailConfirmation = "http://localhost:4200/emailConfirmation"
      const { userName, password, email  } = data;
      const user = { userName, password, email , clientURIForEmailConfirmation };
      const response = await axios.post("/api/User", user);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

export const getUserFilms = async() => {
  try{
    const response = await axios.get("api/WatchHistory")
    return response.data;
  }catch (error) {
    throw new Error(error.response);
  }
}

export const getUserFriends = async() => {
  try{
    const response = await axios.get("api/Friends")
    return response.data;
  }catch (error) {
    throw new Error(error.response);
  }
}
