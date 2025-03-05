import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css"; // Stil için opsiyonel

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1>404 - Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil.</p>
      <Link to="/" className={styles.homeLink}>
        Anasayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage;
