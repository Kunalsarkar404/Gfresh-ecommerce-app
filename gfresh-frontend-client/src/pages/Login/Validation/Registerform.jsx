import * as Yup from "yup";

export const Registerform = Yup.object({
  first_name: Yup.string()
    .label("First Name")
    .min(2)
    .max(19)
    .required("Please Enter First Name"),
  last_name: Yup.string()
    .label("Last Name")
    .min(2)
    .max(19)
    .required("Please Enter Last Name"),
  email: Yup.string()
    .label("Email")
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.number()
    .label("Mobile No")
    .min(1000000000, "Mobile number must be at least 10 digits")
    .max(9999999999, "Mobile number cannot be more than 10 digits")
    .required("Mobile Number is required"),
    dob: Yup.date()
    .label("Date of Birth")
    .nullable()
    .required("Date of Birth is required")
    .test(
      "is-adult",
      "Must be at least 18 years old",
      function (value) {
        const today = new Date();
        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
        return value <= eighteenYearsAgo;
      }
    ),
  password: Yup.string()
    .label("Password")
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
