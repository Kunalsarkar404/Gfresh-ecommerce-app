import * as Yup from "yup";

export const Voucherlogin = Yup.object({
  vouchercode: Yup.string()
    .label("Voucher Code")
    .required("Voucher Code is required"),
    mobile: Yup.number()
    .label("Mobile No")
    .min(1000000000, "Mobile number must be at least 10 digits")
    .max(9999999999, "Mobile number cannot be more than 10 digits")
    .required("Please Enter Your Mobile Number"),
      otp: Yup.string()
    .required("Please Enter Meta Description"),
});
