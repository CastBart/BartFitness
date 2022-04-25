import styles from "./Header.module.css";
import Navigation from "./Navigation";
import { useState } from "react";

const Header = (props) => {
  const [visible, setVisible] = useState(false);

  const menuClickHandler = (event) => {
    toggleMenuHandler();
  };

  const toggleMenuHandler = () => {
    // console.log(visible);
    setVisible((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <button
        onClick={menuClickHandler}
        className={styles.button}
        aria-controls="navigation"
      />
      <Navigation visible={visible} />
    </header>
  );
};

export default Header;
