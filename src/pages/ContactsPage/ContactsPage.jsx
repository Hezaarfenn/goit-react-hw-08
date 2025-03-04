import ContactsForm from "../../components/Contacts/ContactForm/ContactForm";
import ContactsList from "../../components/Contacts/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function index() {
  return (
    <div>
      <ContactsForm />
      <SearchBox />
      <ContactsList />
    </div>
  );
}
