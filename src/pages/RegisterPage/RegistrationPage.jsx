import RegistrationForm from "../../components/Auth/RegistrationForm/RegistrationForm";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // -1, bir önceki sayfaya gitmek için kullanılır
  };

  return (
    <div>
      <div>
        <button onClick={handleGoBack}>Geri</button>
      </div>
      <div>
        <h1>Registration Page</h1>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
