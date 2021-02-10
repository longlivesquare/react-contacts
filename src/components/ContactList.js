import ContactItem from "./ContactItem";
import { useContacts } from "../hooks";
import { useHistory } from "react-router-dom";

const ContactList = () => {
    const { contacts, removeContact } = useContacts();
    const history = useHistory();

    const handleButton = (e) => {
        history.push('/newContact');
    }

    return (
        <div>
            <button onClick={handleButton}>Add new Contact</button>
            {    
                contacts.map((contactData, index) =>
                    <ContactItem
                        key={contactData.phoneNumber}
                        phoneNumber={contactData.phoneNumber}
                        firstName={contactData.firstName}
                        lastName={contactData.lastName}
                        profileImg={contactData.profileImg}
                        deleteContact={() => removeContact(index)}
                    />
                )
            }
        </div>
    )
}

export default ContactList;