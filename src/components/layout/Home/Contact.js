import styles from "./Contact.module.css";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted");


    emailjs.sendForm('service_bartfitness', 'template_69ec6ks', event.target, 'Anlb87tY-ddg7qr4X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    event.target.reset();
  };
  return (
    <section id="contact-me" className={styles.contact}>
      <h1>Contact Me!</h1>
      <p>bartosz.j.zych@gmail.com</p>
      <p>+353 851744940</p>
      <p>Area of operation: Carlow/Kilkenny</p>
      <Card className={styles.card}>
        <form onSubmit={submitHandler} className={styles.form}>
          <section className={styles.info}>
            <div className={styles.name}>
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" name="name"/>
            </div>
            <div className={styles.phone}>
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" name="phone"/>
            </div>
            <div className={styles.email}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email"/>
            </div>
          </section>
          <section className={styles.message}>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" type="text" name="message"/>
            </div>
          </section>
          <div className={styles.button}>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default Contact;
