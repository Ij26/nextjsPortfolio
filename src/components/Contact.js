import ContactForm from "./ContactForm";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <ContactForm />
    </section>
  );
};

export default Contact;
