import * as Yup from "yup";

export const login_shema = Yup.object().shape({
    userName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    password: Yup.string().required("Password is required"),
  });