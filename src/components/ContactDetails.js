import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useContacts } from "../hooks";
import '../css/ContactDetails.css'

const ContactDetails = () => {
    const { contacts } = useContacts();
    const { index } = useParams();
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [address, setAddress] = useState('');

    const html = (
        <div>
        <img src={profileImg} alt='Profile' />
        <h2>{firstName} {lastName}</h2>
        <h3>Phone Number</h3>
        {phoneNumber}
        <h3>Email</h3>
        {email}
        <h3>Address</h3>
        {address}
    </div>)

    useEffect(() => {
        if(contacts.length > 0 && index) {
            const contact = contacts[index];
            setFirstName(contact.firstName);
            setLastName(contact.lastName);
            setPhoneNumber(contact.phoneNumber);
            setEmail(contact.email);
            setProfileImg(contact.profileImg);
            setAddress(contact.address);
        }
    } ,[contacts, index])

    return (
        <div>
            <button onClick={() => history.goBack()}>Go Back</button>
            {index && contacts.length > 0 ? html : <div>Nothing</div>}
            
            
        </div>
    );
}

export default ContactDetails