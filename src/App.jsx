import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import "./App.css";
import ContactsData from "./data/data.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(ContactsData);

  const [filterValue, setFilterValue] = useState("");

  const handleFilter = (e) => {
    const value = e.target.value;

    setFilterValue(value);
  };

  const filteredContacts = ContactsData.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const onAddContact = (contact) => {
    const finalContact = { ...contact, id: nanoid() };

    setContacts([finalContact, ...contacts]);
  };

  // const onDeleteContact = (contactId) => {
  //   setContacts((finalContact) =>
  //     finalContact.filter((contact) => contact.id !== contactId)
  //   );
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox filterValue={filterValue} handleFilter={handleFilter} />
      <ContactForm onAddContact={onAddContact} />
      <ContactList
        filteredContacts={filteredContacts}
        // onDeleteContact={onDeleteContact}
      />
    </>
  );
}

export default App;
