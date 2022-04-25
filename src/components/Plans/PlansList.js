import styles from "./PlansList.module.css";
import Plan from "./Plan";

import plan1Img from "../../images/plan1.jpg";
import plan2Img from "../../images/plan2.jpg";
import plan3Img from "../../images/plan3.jpg";

export const programs = [
  {
    id: "p1",
    title: "One Off Session",
    imgSrc: plan1Img,
    help: ["1 on 1 Coaching Session", "Injury/Pain", "Form Correction"],
    description: "",
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
    description: "Over six intense weeks, he’ll take you through 36 unforgiving workouts to help you gain muscle, torch fat, and achieve results you’ve never experienced before. The program focuses on six training elements: strength, hypertrophy, endurance, power, agility, and mobility. His workouts are intense—your muscles will burn, your sweat will pour, and your stamina will be tested—but completing them all will help you gain muscle and torch fat in just six weeks.",
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
    description: "Most workout plans fail because they are either too hard or they are too short and this does not give the people doing them enough time to get used to them and see results. If you are looking for a schedule that covers these two things then the 10-week workout plan is for you. While it may start simple and easy, over the next ten weeks the workouts will increase in intensity and frequency thus giving you ample time to lose weight and even build muscle.",
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
