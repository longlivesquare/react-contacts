import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  return (
    <div>
      <ContactForm 
        onSubmit={addContact}
      />
      <ContactList 
        contacts={contacts}
      />
    </div>
  );
}

export default App;
