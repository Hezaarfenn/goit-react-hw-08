import RegistrationForm from "../../components/Auth/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // -1, bir önceki sayfaya gitmek için kullanılır
  };

  return (
    <div>
      <div>
        <button onClick={handleGoBack} className={styles.goBackButton}>
          Geri
        </button>
      </div>
      <div className={styles.container}>
        <h1>Kayıt Ol</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
