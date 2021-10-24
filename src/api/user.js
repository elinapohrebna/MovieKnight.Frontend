import axios from "../utils/axios";

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
      const clientURIForEmailConfirmation = "http://localhost:4200/confirmationMail"
      const { userName, password, email  } = data;
      const user = { userName, password, email , clientURIForEmailConfirmation };
      const response = await axios.post("/api/User", user);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const confirmMail = async data => {
    try {
      console.log(data);
      const { token, email } = data;
      const user = { token, email };
      const response = await axios.post("/api/User/confirmEmail", user);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };
