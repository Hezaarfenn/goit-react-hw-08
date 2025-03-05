import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../../redux/auth/authOperations";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Yalnızca harfler izin verilir")
      .required("İsim alanı zorunludur"),
    email: Yup.string()
      .email("Geçerli bir email adresi girin")
      .required("Email alanı zorunludur"),
    password: Yup.string()
      .required("Şifre alanı zorunludur")
      .min(3, "Şifre en az 3 karakter olmalıdır"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Dispatch işlemi
      const result = await dispatch(register(values));

      // Eğer register işlemi başarılıysa
      if (result.payload) {
        navigate("/login");
      } else {
        // Sunucudan gelen hata mesajını göster
        setErrors({
          submit: result.error
            ? result.error.message
            : "Kayıt sırasında bir hata oluştu",
        });
      }
    } catch (error) {
      // Yakalanan hatayı göster
      setErrors({
        submit: error.message || "Beklenmedik bir hata oluştu",
      });
    } finally {
      // Submit durumunu sonlandır
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className={styles.registerForm}>
          <div>
            <Field
              name="name"
              placeholder="İsim"
              type="text"
              autoComplete="name"
              className={styles.registerInput}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <div>
            <Field
              name="email"
              placeholder="Email"
              type="email"
              autoComplete="email"
              className={styles.registerInput}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          <div>
            <Field
              name="password"
              placeholder="Şifre"
              type="password"
              autoComplete="current-password"
              className={styles.registerInput}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.errorMessage}
            />
          </div>

          {errors.submit && (
            <div className={styles.errorMessage}>{errors.submit}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.registerButton}
          >
            {isSubmitting ? "Kaydediliyor..." : "Kayıt Ol"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
