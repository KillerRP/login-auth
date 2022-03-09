import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const Register = () => {
  const initialValues = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    password: "",
  };

  const formStyle = {
    width: "100%",
    paddingInline: "39%",
  };
  const onSubmit = (values) => {
    console.log(values);

    const formUserInfo = {
      customer: {
        firstname: values.firstname,
        middlename: values.middlename,
        lastname: values.lastname,
        email: values.email,
      },
      password: values.password,
    };
    axios
      .post(`https://admin.thebig.deals/rest/all/V1/customers`, formUserInfo)
      .then((res) => {
        console.log("Response : ", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validationSchema = yup.object().shape({
    firstname: yup.string().required("Required !"),
    middlename: yup.string().required("Required !"),
    lastname: yup.string().required("Required !"),
    email: yup.string().email("Invalid Email Format").required("Required !"),
    password: yup
      .string()
      .required("Required !")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One special case Character"
      ),
  });

  // Using useEffect Problem is solved Data is saved with one click only

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
        <Form style={formStyle}>
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
              {(msg) => <div className="text-danger flex-wrap">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="mb-3 d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
