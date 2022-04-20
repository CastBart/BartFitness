import { HashLink } from "react-router-hash-link";
import styles from "./MyLink.module.css";

const MyLink = (props) => {
  return (
    <div>
      <HashLink className={styles.link} smooth to={props.to}>
        {props.children}
      </HashLink>
    </div>
  );
};

export default MyLink;
