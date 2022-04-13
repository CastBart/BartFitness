import PlansList from "../Plans/PlansList";
import styles from "./Plans.module.css";



const Plans = () => {
  return (
    <section className={styles.plans}>
        <h1>Programs</h1>
      <PlansList />
    </section>
  );
};

export default Plans;
