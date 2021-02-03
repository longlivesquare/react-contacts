import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactContext from './contexts/contactContext';
import ContactProvider from './providers/ContactProvider';

const App = () => {
  
  return (
    <div>
      <ContactProvider>
        <ContactForm />
        <ContactList />
      </ContactProvider>
    </div>
    
  );
}

export default App;
