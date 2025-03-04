import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import login from "../../../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçerli bir e-posta giriniz")
      .required("E-posta zorunludur"),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalıdır")
      .required("Şifre zorunludur"),
  });

  const handleSubmit = async (values) => {
    try {
      await dispatch(login(values));
      navigate("/contacts");
    } catch (error) {
      alert("E-posta veya şifre hatalı!", error.message);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">E-posta:</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="password">Şifre:</label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <button type="submit">Giriş Yap</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
