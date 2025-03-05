import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { NavLink } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/Contacts/ContactList/ContactList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <NavLink to="/">Ana Sayfa</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {!isLoggedIn ? (
          <>
            <div className={styles.authLinks}>
              <NavLink to="/login">Giriş Yap</NavLink>
              <NavLink to="/register">Kayıt Ol</NavLink>
            </div>
          </>
        ) : (
          <LogoutButton />
        )}
      </nav>

      <div className={styles.content}>
        <h1>Hoş Geldiniz!</h1>
        {isLoggedIn ? (
          <>
            <SearchBox />
            <div>
              <h2>Contacts List</h2>
              <ContactList />
            </div>
          </>
        ) : (
          <p className={styles.loginMessage}>
            Devam etmek için lütfen giriş yapın.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
