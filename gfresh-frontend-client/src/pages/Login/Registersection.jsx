import React from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { tokenstore } from "../../Localstorage/Store";
import { Registerform } from "./Validation/Registerform";
import { usePostCreateUserMutation } from "../../store/api/userapi";

const Registersection = () => {
  const navigate = useNavigate();
  const [createUser] = usePostCreateUserMutation();

  // Function to handle registration form submission
  const handleRegister = async (values, { setFieldError }) => {
    try {
      const response = await createUser(values);
      if (response?.data?.status === "successful") {
        tokenstore(response.data.token);
        navigate("/home");
      } else {
        if (response.data.errors) {
          if (response.data.errors.keyValue?.email) {
            setFieldError("email", "Email is already registered. Please use a different email.");
          }
          if (response.data.errors.keyValue?.mobile) {
            setFieldError("mobile", "Mobile number is already registered. Please use a different number.");
          }
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="album py-1">
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          mobile: "",
          password: "",
          dob: null,
        }}
        validationSchema={Registerform}
        onSubmit={handleRegister}
      >
        {({ values, errors, touched }) => (
          <Form autoComplete="off" className="form-login">
            <label htmlFor="first_name">First Name</label>
            <Field
              type="text"
              name="first_name"
              className="login-input mb-0"
              placeholder="Enter your First Name"
              value={values.first_name}
            />
            {errors.first_name && touched.first_name && (
              <p style={{ color: "red" }}>{errors.first_name}</p>
            )}

            <label htmlFor="last_name">Last Name</label>
            <Field
              type="text"
              name="last_name"
              className="login-input mb-0"
              placeholder="Enter your Last Name"
              value={values.last_name}
            />
            {errors.last_name && touched.last_name && (
              <p style={{ color: "red" }}>{errors.last_name}</p>
            )}

            <label htmlFor="mobile">Mobile No.</label>
            <Field
              type="number"
              name="mobile"
              className="login-input mb-0"
              placeholder="Enter your Mobile No"
              value={values.mobile}
            />
            {errors.mobile && touched.mobile && (
              <p style={{ color: "red" }}>{errors.mobile}</p>
            )}

            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              className="login-input mb-0"
              placeholder="Enter your Email"
              value={values.email}
            />
            {errors.email && touched.email && (
              <p style={{ color: "red" }}>{errors.email}</p>
            )}

            <label htmlFor="dob">Date of Birth</label>
            <Field
              type="date"
              name="dob"
              className="login-input mb-0"
              placeholder="Enter your DOB"
              value={values.dob}
            />
            {errors.dob && touched.dob && (
              <p style={{ color: "red" }}>{errors.dob}</p>
            )}

            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              className="login-input mb-0"
              placeholder="Enter your password"
              value={values.password}
            />
            {errors.password && touched.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}

            <button type="submit" className="btn" id="registerForm">
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registersection;
