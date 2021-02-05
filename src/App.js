import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import LoginForm from './components/LoginForm';
import AuthProvider from './providers/AuthProvider';
import ContactProvider from './providers/ContactProvider';

const App = () => {
  
  return (
   <div>
     <AuthProvider>
       <ContactProvider>
         <LoginForm />
         <ContactForm />
         <ContactList />
       </ContactProvider>
     </AuthProvider>
   </div> 
  );
}

export default App;
