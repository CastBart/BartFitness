import styles from "./Footer.module.css";
import logoImg from "../../images/BartFitnessLogo.png";
import fbIcon from "../../images/facebookIcon.jpg";
import igIcon from "../../images/instagramIcon.jpg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>©All rights reserved</p>
      <div className={styles.logo}>
        <img src={logoImg} alt="" />
      </div>
      <div className={styles.social}>
        <div className={styles["icon-fb"]}>
          <img src={fbIcon} />
        </div>
        <div className={styles["icon-ig"]}>
          <img src={igIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
