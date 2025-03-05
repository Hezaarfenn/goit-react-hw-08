import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import { resetAuthState } from "../../redux/auth/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetAuthState());
  };

  return (
    <NavLink to="/" onClick={handleLogout}>
      Çıkış Yap
    </NavLink>
  );
};

export default LogoutButton;
