import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegisterPage/RegistrationPage";
import PrivateRoute from "./components/Router/PrivateRoute";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/authSelectors";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/contacts"
          element={
            isLoggedIn ? (
              <ContactsPage />
            ) : (
              <PrivateRoute>
                <LoginPage />
              </PrivateRoute>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
