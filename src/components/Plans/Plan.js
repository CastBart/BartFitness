import Card from "../ui/Card";
import styles from "./Plan.module.css";
import Button from "../ui/Button";

const Plan = (props) => {
  let id = 0;
  const liItems = props.help.map((element) => {
    id++;
    return <li key={props.id + id.toString()}>{element}</li>;
  });
  return (
    <Card className={styles.card}>
      <section key={props.id} className={styles.plan}>
        <h2>{props.title}</h2>
        <img src={props.imgSrc} />
        <ul>{liItems}</ul>
      </section>
    </Card>
  );
};

export default Plan;
