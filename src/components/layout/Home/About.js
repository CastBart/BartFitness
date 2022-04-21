import React from "react";
import Card from "../../ui/Card";
import styles from "./About.module.css";

const About = () => {
  return (
    <Card>
      <section id="about" className={styles.about}>
        <h1>About me</h1>
        <p>
          Hi, my name is Bartek, I am a qualified personal trainer at FLYEfit
          gym in Cork city. ​<br />
          <br /> My story:
          <br /> I began my fitness journey at the start of September of 2015,
          and let me tell you this - I absolutely fell in love with it. I am
          very passionate about fitness and I have learned a lot about it over
          the years. As a personal trainer, I would like to share what I know
          about fitness, living a healthy and active lifestyle. <br />
          <br />
          ​Why me? 
          <br /> What do you think is the hardest to achive at the gym? Fat
          Loss? Build Muscle? Gaining Strength? Whatever it may be, I can help
          you achieve it. Trust me on this one. We can all do it. With the right
          mindset, good diet and a well thought out training program, it's not
          that difficult at all. I would be more than happy to work with you and
          guide you through every step of the way. By going ahead and choosing
          one of my programs, I will pass on what I know, and the "training" and
          "going to the gym" that you once thought was a pain in the ass, will
          actually become enjoyable.
          <br />
          <br />
          Book your FREE 30 minute consultation, and say START to improving you
          fitness goals! W'll be discussing your goals, experience and what are
          the benefits of personal training. Looking forward to hearing from
          you!
        </p>
      </section>
    </Card>
  );
};

export default About;
