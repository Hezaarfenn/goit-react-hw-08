import ContactsForm from "../../components/Contacts/ContactForm/ContactForm";
import ContactsList from "../../components/Contacts/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useNavigate } from "react-router-dom";
import styles from "./ContactsPage.module.css";
const ContactsPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <button onClick={handleGoBack} className={styles.goBackButton}>
          Geri
        </button>
      </div>

      <div className={styles.titleContainer}>
        <h2>Kişileri Ara</h2>
        <SearchBox />
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactForm}>
          <h2>Yeni Kişi Ekle</h2>
          <ContactsForm />
        </div>
        <div className={styles.contactList}>
          <h2>Kişilerim</h2>
          <ContactsList />
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
