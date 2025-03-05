// src/components/ContactList.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  fetchContacts,
} from "../../../redux/contacts/contactsOperations";
import { selectFilteredContacts } from "../../../redux/filters/filtersSelectors";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
