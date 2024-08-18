import { useState } from "react";
import "./App.css";
import ContactsData from "./data/data.json";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <SearchBox />
      <ContactForm />
      <ContactList contacts={ContactsData} />
    </>
  );
}

export default App;
