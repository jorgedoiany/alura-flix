import { Link } from "react-router-dom";
import HeaderLink from "../headerLink/HeaderLink";
import styles from "./Header.module.css";
import logo from "./logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="Logo Alura" />
        </section>
      </Link>
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <HeaderLink url="./">INICIO</HeaderLink>
          <HeaderLink url="./newVideo">NUEVO VIDEO</HeaderLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
