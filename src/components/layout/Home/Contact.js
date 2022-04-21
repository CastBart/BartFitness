import styles from "./Contact.module.css";
import Button from "../../ui/Button";
import Card from "../../ui/Card";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isPhoneNumber = (value) => {
  const regExp = /08[36579]\d{7}/;
  return regExp.test(value.trim());
};

const Contact = () => {
  const [disabled, setDisabled] = useState(true);

  // name validity
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  // phone validity
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput(isPhoneNumber);

  // email validity
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(isEmail);

  // message validity
  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput(isNotEmpty);

  // form validity
  useEffect(() => {
    if (
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPhoneIsValid &&
      enteredMessageIsValid
    ) {
      setDisabled(false);
    }
  }, [
    enteredNameIsValid,
    enteredPhoneIsValid,
    enteredEmailIsValid,
    enteredMessageIsValid,
  ]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submitted");

    resetNameInput();
    resetPhoneInput();
    resetEmailInput();
    resetMessageInput();
    emailjs
      .sendForm(
        "service_bartfitness",
        "template_69ec6ks",
        event.target,
        "Anlb87tY-ddg7qr4X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <div
              className={
                nameInputHasError
                  ? `${styles.name} ${styles.error}`
                  : `${styles.name}`
              }
            >
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
              />
            </div>
            <div
              className={
                phoneInputHasError
                  ? `${styles.phone} ${styles.error}`
                  : `${styles.phone}`
              }
            >
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                onChange={phoneChangeHandler}
                onBlur={phoneBlurHandler}
                value={enteredPhone}
              />
            </div>
            <div
              className={
                emailInputHasError
                  ? `${styles.email} ${styles.error}`
                  : `${styles.email}`
              }
            >
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
              />
            </div>
          </section>
          <section
            className={
              messageInputHasError
                ? `${styles.message} ${styles.error}`
                : `${styles.message}`
            }
          >
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                type="text"
                name="message"
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                value={enteredMessage}
              />
            </div>
          </section>
          <div className={styles.button}>
            <Button disabled={disabled} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </section>
  );
};

export default Contact;
