import * as Yup from "yup";

export const checkoutvalidation = Yup.object({
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
  email: Yup.string().email().label("Email")
    .required("Please Enter Email"),
  address1: Yup.string()
  .label("Address 1")
    .min(2)
    .required("Please Enter Address1"),
  address2: Yup.string()
  .label("Address 2")
    .min(2)
    .required("Please Enter Address2"),
  country: Yup.string()
    .label("Country")
    .min(2)
    .required("Country is required"),
  state: Yup.string()
    .label("State")
    .min(2)
    .required("State is required"),
  city: Yup.string()
    .label("City")
    .min(2)
    .required("City is required"),
  pincode: Yup.string()
    .label("PinCode")
    .min(6)
    .max(6)
    .required("Pincode is required"),
    mobile: Yup.number()
    .label("Mobile No")
    .min(1000000000, "Mobile number must be at least 10 digits")
    .max(9999999999, "Mobile number cannot be more than 10 digits")
    .required("Mobile Number is required"),
});
