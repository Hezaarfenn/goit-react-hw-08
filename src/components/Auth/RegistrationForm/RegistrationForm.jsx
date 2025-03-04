import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../../redux/auth/authOperations";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed")
      .required(),
    email: Yup.string().required(),
    password: Yup.string().required().min(3),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    try {
      await dispatch(register(values));
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => {
          return (
            <Form>
              <div>
                <Field
                  name="name"
                  value={values.name}
                  placeholder="name"
                  type="text"
                  autoComplete="name"
                  onChange={handleChange}
                />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <Field
                  name="email"
                  value={values.email}
                  placeholder="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <Field
                  name="password"
                  value={values.password}
                  placeholder="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                <Field
                  name="confirmPassword"
                  value={values.confirmPassword}
                  placeholder="confirm password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <button type="submit">Register</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
