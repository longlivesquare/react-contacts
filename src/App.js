import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import LoginForm from './components/LoginForm';
import AuthProvider from './providers/AuthProvider';
import ContactProvider from './providers/ContactProvider';

const App = () => {
  
  return (
   <div>
     <BrowserRouter>
      <AuthProvider>
        <ContactProvider>
          <Route path='/login'><LoginForm /></Route>
          <Route path='/newContact'><ContactForm /></Route>
          <Route path='/contacts'><ContactList /></Route>
        </ContactProvider>
      </AuthProvider>
     </BrowserRouter>
   </div> 
  );
}

export default App;
