import LoginForm from "../../components/Auth/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <button onClick={handleGoBack}>Geri</button>
      </div>

      <div>
        <h2>Giriş Yap</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
