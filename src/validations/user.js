import * as Yup from "yup";

export const login_shema = Yup.object().shape({
    userName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    password: Yup.string().required("Password is required"),
  });

export const register_shema = Yup.object().shape({
    userName: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must be the same!")
      .required("Required!"),
  });