import styles from "../../Plans/Plan.module.css";
import Card from "../../ui/Card";
import React from "react";

const TrainingProgram = (props) => {
  let id = 0;
  const liItems = props.help.map((element) => {
    id++;
    return <li key={props.id + id.toString()}>{element}</li>;
  });
  return (
    <section key={props.id} className={styles.plan}>
      <Card>
        <h2>{props.title}</h2>
        <img src={props.imgSrc} />
        <ul>{liItems}</ul>
      </Card>
      <p>{props.description}</p>
    </section>
  );
};

export default TrainingProgram;
