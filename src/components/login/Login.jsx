import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

import * as yup from "yup";
const Login = () => {
  const userData = {
    email: "xyz@gmail.com",
    paddword: 1234,
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    if (values.email == userData.email) {
      if (values.password == userData.paddword) {
        console.log("Login Sucess");
      } else {
        console.log("Invalid Password");
      }
    } else {
      console.log("Invalid Email");
    }
    console.log("Login Data : ", values);
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Required !"),
    password: yup.string().required("Required !"),
  });
  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <h1 className="text-center">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Username
            </label>
            <Field
              type="text"
              name="email"
              id="email"
              className="form-control"
            />
            <ErrorMessage name="email">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
            <ErrorMessage name="password">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Log in
          </button>
          <button className="btn btn-primary mt-3 float-end">
            <Link to="/register" className="text-decoration-none text-white">
              Sign up
            </Link>
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
