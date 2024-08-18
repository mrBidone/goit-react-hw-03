import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={css.contactValueWrapper}>
        <p>
          <FaUser className={css.userIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.telIcon} />
          {number}
        </p>
      </div>
      <button type="button">Delete</button>
    </>
  );
};

export default Contact;
