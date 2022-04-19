import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { HashLink } from "react-router-hash-link";

const Navigation = (props) => {

  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <HashLink smooth to="/home#about">
          About
        </HashLink>
        <HashLink smooth to="/home#plans">
          Training Programs
        </HashLink>
        <HashLink smooth to="/home#contact-me">
          Contact me
        </HashLink>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        {/* <li>
        <NavLink className={(navData)=> navData.isActive ? styles.active : ''} to='/login'>
            Login
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
