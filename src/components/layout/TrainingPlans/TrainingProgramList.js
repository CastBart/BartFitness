import styles from "./TrainingProgramList.module.css";
import { programs } from "../../Plans/PlansList";
import TrainingProgram from "./TrainingProgram";

const TrainingProgramList = () => {
  return (
    <section className={styles.list}>
      {programs.map((plan) => (
        <TrainingProgram
          key={plan.id}
          id={plan.id}
          title={plan.title}
          imgSrc={plan.imgSrc}
          help={plan.help}
          description={plan.description}
        />
      ))}
    </section>
  );
};

export default TrainingProgramList;
