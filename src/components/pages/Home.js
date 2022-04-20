import React from "react";
import About from "../layout/Home/About";
import Contact from "../layout/Home/Contact";
import Plans from "../layout/Home/Plans";

const Home = () => {
  return (
    <section id="home-page">
      <About />
      <Plans />
      <Contact />
    </section>
  );
};

export default Home;
