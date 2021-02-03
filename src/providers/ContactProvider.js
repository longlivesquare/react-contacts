import { useState } from 'react';
import ContactContext from '../contexts/contactContext';

const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const removeContact = (index) => {
    setContacts(contacts.filter((contact, i) => index !== i));
  }

  return (
      <ContactContext.Provider value={ { contacts, addContact, removeContact } }>
          {children}
      </ContactContext.Provider>
  )
}

export default ContactProvider;