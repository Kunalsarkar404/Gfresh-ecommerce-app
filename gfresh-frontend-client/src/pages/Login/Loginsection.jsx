import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { tokenstore } from "../../Localstorage/Store";
import { usePostLoginUserMutation } from "../../store/api/userapi";
import { Loginuser } from "./Validation/Loginuser";


const Loginsection = () => {
  const [clientLoginErrors, setClientLoginErrors] = useState(null);
  const navigate = useNavigate();
  const [loginUser] = usePostLoginUserMutation();

  // Function to handle login form submission
  const handleLogin = async (values, { setFieldError }) => {
    try {
      const response = await loginUser(values);
      if (response && response.data && response.data.status === "successful") {
        tokenstore(response.data.token);
        navigate("/home");
      } else {
        setClientLoginErrors(response?.error?.data?.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setClientLoginErrors("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="album py-1">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Loginuser}
        onSubmit={handleLogin}
      >
        {({ values, errors, touched }) => (
          <Form autoComplete="off" className="form-login">
            <label htmlFor="email">Email Id</label>
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

            <div className="login-sub">
              <div className="remember">
                <input
                  className="form-check-input m-2"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <p>Remember me</p>
              </div>
              <div>
                <p>Forgot password?</p>
              </div>
            </div>

            <button type="submit" className="btn" id="loginForm">
              Login
            </button>
            {clientLoginErrors && (
              <span style={{ color: "red", textAlign: "center", display: "block", marginTop: "3px", fontSize: "15px" }}>
                {clientLoginErrors}
              </span>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Loginsection;
