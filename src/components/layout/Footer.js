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
        <div onClick={() => window.open("https://m.facebook.com/bartek.fitness/", '_blank')} className={styles["icon-fb"]}>
          <img src={fbIcon} />
        </div>
        <div onClick={() => window.open("https://www.instagram.com/bartek.fitness/?hl=en", '_blank')} className={styles["icon-ig"]}>
          <img src={igIcon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
