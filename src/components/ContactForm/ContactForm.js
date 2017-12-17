import React from 'react';
import Button from '../common/Button';
import styles from './ContactForm.module.css';

/**
 * ContactForm component
 */
const ContactForm = () => (
  <div className={styles.wrapper}>
    <form action="https://formspree.io/mceuteixeira1@gmail.com" method="POST">
      <div className={styles.nameEmail}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="_replyto" placeholder="Your email" required />
      </div>
      <input type="text" name="subject" placeholder="Subject" required />
      <textarea name="message" placeholder="Message" rows={6} />
      <div className={styles.button}>
        <Button type="submit" medium>
          SEND MESSAGE
        </Button>
        <Button type="submit">SEND MESSAGE</Button>
      </div>
    </form>
  </div>
);

export default ContactForm;
