import React from "react";
import styles from "../contact/contact.module.css";
import { MdEmail, MdForum, MdVoiceChat } from "react-icons/md";
import Link from "next/link";
const ContactCard = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.grid_card}>
            <i>
              <MdEmail />
            </i>
            <h2>Email</h2>
            <p>Monday to Friday</p>
            <p className={styles.last_para}>Response Time: 72 hours</p>
            <Link href="/">
              {" "}
              Send Email <span>&gt;</span>
            </Link>
          </div>
          {/* second */}
          <div className={styles.grid_card}>
            <i>
              <MdVoiceChat />
            </i>
            <h2>Live Chat</h2>
            <p>Monday to Friday</p>
            <p className={styles.last_para}>10 AM to 5PM IST</p>
            <Link href="/">
              {" "}
              Chat Now <span>&gt;</span>
            </Link>
          </div>
          {/* third */}
          <div className={styles.grid_card}>
            <i>
              <MdForum/>
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday</p>
            <p className={styles.last_para}>Response Time: 72 hours</p>
            <Link href="/">
              {" "}
              Connect with us <span>&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
