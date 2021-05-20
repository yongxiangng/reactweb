import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

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
    <div className="footer">
      <div className="footerMenu">
        <Contacts contacts={contacts} />
      </div>
    </div>
  );
}

function Contacts(props) {
  const { contacts } = props;
  return (
    <div className="contacts">
      {contacts.map((contact) => (
        <Contact contact={contact} key={contact.url} />
      ))}
    </div>
  );
}

function Contact(props) {
  const { contact } = props;
  return (
    <div className="contact">
      <div className="icon">
        <FontAwesomeIcon icon={contact.icon} className="fa" />
      </div>
      <a
        className="contact-url"
        href={contact.isWebPage ? "https://" + contact.url : null}
        target="_blank"
        rel="noopener noreferrer"
      >
        {contact.url}
      </a>
    </div>
  );
}
