import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <button onClick={handleGoBack} className={styles.goBackButton}>
          Geri
        </button>
      </div>

      <div className={styles.loginContainer}>
        <h2>Giriş Yap</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
