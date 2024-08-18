import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.ContactListItem} key={id}>
          <Contact name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
