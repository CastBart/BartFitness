import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PlansList from "../../Plans/PlansList";
import MyLink from "../../ui/MyLink";
import styles from "./Plans.module.css";

const Plans = () => {
  return (
    <section id="plans" className={styles.plans}>
      <h1>Programs</h1>
      <PlansList />
      <MyLink to='/training-plans#program-page'>Find out more!</MyLink>
    </section>
  );
};

export default Plans;
