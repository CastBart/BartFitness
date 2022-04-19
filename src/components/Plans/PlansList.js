import styles from "./PlansList.module.css";
import Plan from "./Plan";
import { useEffect } from "react";

import plan1Img from "../../images/plan1.jpg";
import plan2Img from "../../images/plan2.jpg";
import plan3Img from "../../images/plan3.jpg";

export const programs = [
  {
    id: "p1",
    title: "One Off Session",
    imgSrc: plan1Img,
    help: ["1 on 1 Coaching Session", "Injury/Pain", "Form Correction"],
    description: "Sample description for program number 1",
  },
  {
    id: "p2",
    title: "6 Week Program",
    imgSrc: plan2Img,
    help: [
      "Tailored Training Program",
      "Consultation & Goal Setting",
      "Goal Specific Nutritional Advice",
    ],
    description: "Sample description for program number 1",
  },
  {
    id: "p3",
    title: "10 Week Program",
    imgSrc: plan3Img,
    help: [
      "Tailored Training Program",
      "Consultation & Goal Setting",
      "Goal Specific Nutritional Advice",
      "Home Workout Plan",
    ],
    description: "Sample description for program number 1",
  },
];

const PlansList = (props) => {
  const classes = `${styles["plans-list"]} ${
    !props.className ? "" : props.className
  }`;
  return (
    <section className={classes}>
      {programs.map((plan) => (
        <Plan
          key={plan.id}
          id={plan.id}
          title={plan.title}
          imgSrc={plan.imgSrc}
          help={plan.help}
        />
      ))}
    </section>
  );
};

export default PlansList;
