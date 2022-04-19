import { Link } from "react-router-dom";
import PlansList from "../../Plans/PlansList";
import styles from "./Plans.module.css";

const Plans = () => {
  return (
    <section id="plans" className={styles.plans}>
      <h1>Programs</h1>
      <PlansList />
      <Link className={styles.link} to='/training-plans'>Find out more!</Link>
    </section>
  );
};

export default Plans;
