import { Route, Switch } from 'react-router-dom';
import './App.css';
import ContactDetails from './components/ContactDetails';
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
          <Switch>
            <Route path='/login' component={LoginForm}></Route>
            <Route path='/contacts/add' component={ContactForm}></Route>
            <Route path='/contacts/:index' component={ContactDetails} />
            <Route path='/' component={ContactList} exact></Route>
            
          </Switch>
        </ContactProvider>
      </AuthProvider>
   </div> 
  );
}

export default App;
