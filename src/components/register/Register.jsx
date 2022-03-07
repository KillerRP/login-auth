import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";

const Register = () => {
  const dbUser = {
    customer: {
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
    },
    password: "",
  };

  const [customer, SetCustomer] = useState({});
  const [password, SetPassword] = useState({});
  const [userInfo, setUserInfo] = useState(dbUser);

  const initialValues = {
    firstname: "", //Same as name="firstname" in input
    middlename: "",
    lastname: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    setUserInfo(values);
    console.log("UserInfo : ", userInfo);
    // console.log("Form Data ", values);
    // SetCustomer({
    //   firstname: values.firstname,
    //   middlename: values.middlename,
    //   lastname: values.lastname,
    //   email: values.email,
    // });
    // SetPassword({ password: values.password });
  };

  const validationSchema = yup.object().shape({
    firstname: yup.string().required("Required !"),
    middlename: yup.string().required("Required !"),
    lastname: yup.string().required("Required !"),
    email: yup.string().email("Invalid Email Format").required("Required !"),
    password: yup.string().required("Required !"),
  });

  return (
    <div className="d-flex flex-column align-items-center mt-5 pt-5">
      <div>
        <h1>Register</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="mb-3">
            <Field
              type="text"
              placeholder="First name"
              id="firstname"
              className="form-control"
              name="firstname"
            />
            <ErrorMessage name="firstname">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <Field
              type="text"
              placeholder="middle name"
              id="middlename"
              className="form-control"
              name="middlename"
            />
            <ErrorMessage name="middlename">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <Field
              type="text"
              placeholder="lastname"
              id="lastname"
              className="form-control"
              name="lastname"
            />
            <ErrorMessage name="lastname">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <Field
              type="email"
              placeholder="email"
              id="email"
              name="email"
              className="form-control"
            />
            <ErrorMessage name="email">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3">
            <Field
              type="password"
              placeholder="password"
              id="password"
              className="form-control"
              name="password"
            />
            <ErrorMessage name="password">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3 d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary ">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
