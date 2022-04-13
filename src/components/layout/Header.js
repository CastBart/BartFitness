import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className={styles.header}> 
      <Navigation />
    </header>
  );
};

export default Header;
