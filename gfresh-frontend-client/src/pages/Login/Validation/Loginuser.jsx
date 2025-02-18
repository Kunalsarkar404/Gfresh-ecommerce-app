import * as Yup from "yup";

export const Loginuser= Yup.object({
  email: Yup.string()
    .label("Email Address")
    .email("Invalid Email Address")
    .max(28)
    .required("Email is required"),
  password: Yup.string()
    .label("Password")
    .min(4,"Password must be at least 4 characters")
    .max(19)
    .required("Password is required"),
});
