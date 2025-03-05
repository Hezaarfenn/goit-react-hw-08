import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../../redux/contacts/contactsOperations";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "İsim çok kısa").required("İsim gereklidir"),
      number: Yup.string()
        .matches(/^\d+$/, "Sadece rakam giriniz")
        .min(10, "Telefon numarası en az 10 haneli olmalıdır")
        .required("Telefon numarası gereklidir"),
    }),
    onSubmit: (values, { resetForm }) => {
      const isDuplicate = contacts.some(
        (contact) => contact.name.toLowerCase() === values.name.toLowerCase(),
      );

      if (isDuplicate) {
        alert(`${values.name} zaten rehberde var!`);
        return;
      }

      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <label>
        İsim:
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </label>

      <label>
        Telefon:
        <input
          type="text"
          name="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </label>

      <button type="submit">Ekle</button>
    </form>
  );
};

export default ContactForm;
