import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { NavLink } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/Contacts/ContactList/ContactList";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {!isLoggedIn && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>

      <h1>Hoş geldiniz!</h1>
      {isLoggedIn ? (
        <>
          <SearchBox />
          <ContactList />
        </>
      ) : (
        <p>Devam etmek için lütfen giriş yapın.</p>
      )}
    </div>
  );
};

export default HomePage;
