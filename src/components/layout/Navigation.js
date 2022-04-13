import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

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
        <a href="#about">About</a>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? styles.active : "")}
            to="/training-plans"
          >
            Training Plans
          </NavLink>
        </li>
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
