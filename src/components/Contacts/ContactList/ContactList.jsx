// src/components/ContactList.jsx
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../../redux/contacts/contactsOperations";
import { selectFilteredContacts } from "../../../redux/contacts/contactsSelectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>
            {name}: {number}
          </span>
          <button onClick={() => dispatch(deleteContact(id))}>Sil</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
