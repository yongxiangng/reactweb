import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.css";

export default function Footer() {
  const contacts = [
    {
      icon: ["fab", "github"],
      url: "github.com/yongxiangng",
      isWebPage: true,
    },
    {
      icon: ["fab", "linkedin"],
      url: "linkedin.com/in/ngyongxiang",
      isWebPage: true,
    },
    {
      icon: ["fas", "envelope"],
      url: "e0388929@u.nus.edu",
      isWebPage: false,
    },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footerMenu}>
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
}

function Contacts(props) {
  const { contacts } = props;
  return (
    <div className={styles.contacts}>
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.url} />
      ))}
    </div>
  );
}

function Contact(props) {
  const { contact } = props;
  return (
    <div className={styles.contact}>
      <div className="icon">
        <FontAwesomeIcon icon={contact.icon} className={styles.fa} />
      </div>
      <a
        className={styles.contactUrl}
        href={contact.isWebPage ? "https://" + contact.url : null}
        target="_blank"
        rel="noopener noreferrer"
      >
        {contact.url}
      </a>
    </div>
  );
}
