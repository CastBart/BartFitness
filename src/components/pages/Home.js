import React from "react";
import About from "../layout/Home/About";
import Contact from "../layout/Home/Contact";
import Plans from "../layout/Home/Plans";

const Home = () => {
  return (
    <React.Fragment>
      <About />
      <Plans />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
