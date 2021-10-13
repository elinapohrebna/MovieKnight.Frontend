import axios from "../utils/axios";

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