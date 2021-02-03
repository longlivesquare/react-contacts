import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([{
    firstName: "Jane",
    lastName: "Doe",
    phoneNumber: "(559)555-5501",
    profileImg: "./logo192.png"
  },
  {
    firstName: "James",
    lastName: "Smith",
    phoneNumber: "(559)555-5521",
    profileImg: "./logo192.png"
  }
  ]);
  return (
    <div>
      <ContactList 
        contacts={contacts}
      />
    </div>
  );
}

export default App;
