import styles from "../../Plans/Plan.module.css";
import Card from "../../ui/Card";
import React from "react";
import MyLink from "../../ui/MyLink";

const TrainingProgram = (props) => {
  let id = 0;
  const liItems = props.help.map((element) => {
    id++;
    return <li key={props.id + id.toString()}>{element}</li>;
  });

  return (
    <section className={styles.train}>
      <Card>
        <section key={props.id} className={styles.plan}>
          <h2>{props.title}</h2>
          <img src={props.imgSrc} />
          <ul>{liItems}</ul>
        </section>
      </Card>
      <section className={styles.description}>
        <p>{props.description}</p>
        <MyLink smooth to='/home#contact-me'>Interested?</MyLink>
      </section>
    </section>
  );
};

export default TrainingProgram;
