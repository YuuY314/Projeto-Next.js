import styles from "./contact.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faEnvelope, faPhone, faBuilding, faClock } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <div className={styles.contact_form}>
          <div className={styles.contact_title}>
            <h1>Contact Us</h1>
            <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your name"/>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="name@email.com"/>
          </div>
          <div className={styles.input_group}>
            <label htmlFor="message">Message</label>
            <textarea type="email" id="message" placeholder="Your message"/>
          </div>
          <Link href="/" className={styles.btn}><FontAwesomeIcon icon={faRightToBracket}/>Send</Link>
        </div>

        <div className={styles.contact_info}>
          <h2>Info</h2>
          <p><FontAwesomeIcon icon={faEnvelope} size="lg"/>unbounce@contact.com</p>
          <p><FontAwesomeIcon icon={faPhone} size="lg"/>+11 4004-4004</p>
          <p><FontAwesomeIcon icon={faBuilding} size="lg"/>67 Kingsroad St.</p>
          <p><FontAwesomeIcon icon={faClock} size="lg"/>09:00 - 18:00</p>
        </div>
      </form>
    </main>
  );
}
