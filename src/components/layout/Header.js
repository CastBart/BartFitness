import styles from "./Header.module.css";
import Navigation from "./Navigation";

const Header = (props) => {
  const menuToggleHandler = (event) => {
    
  };

  return (
    <header className={styles.header}>
      <button
        onClick={menuToggleHandler}
        className={styles.button}
        aria-controls="navigation"
      />
      <Navigation />
    </header>
  );
};

export default Header;
