import ContactItem from "./ContactItem";
import { useAuth, useContacts } from "../hooks";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const ContactList = () => {
    const { contacts } = useContacts();
    const { user } = useAuth();
    const { push } = useHistory();

    useEffect(() => {
        if (!user){
            push('/login')
        }
    }, [user, push])

    const handleButton = (e) => {
        push('/contacts/add');
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
                        handleClick={() => push(`/contacts/${index}`)}
                    />
                )
            }
        </div>
    )
}

export default ContactList;