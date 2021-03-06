import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/ContactForm.css';
import { useContacts } from '../hooks';

const ContactForm = (props) => {
    const [picSrc, setPictureSource] = useState(`${process.env.PUBLIC_URL}/default-image.png`);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const history = useHistory();

    const handleImageUpload = () => {
        console.log("clicked.");
        const input = document.createElement('input');
        input.type = 'file';
        
        input.onchange = event => {
            event.preventDefault();
            const file = event.target.files[0];
        
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            
            fileReader.onload = (event) => {
                setPictureSource(event.target.result)
            };
      };

      input.click();
    }

    const { addContact } = useContacts();

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact({
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            profileImg: picSrc
        });
        clearInputs();
        history.push('/');
    }

    const clearInputs = () => {
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setAddress('');
        setPictureSource('default-image.png');
    }

    return (
        <div className="ContactFormPage">
            <img
                className='ProfilePicture' 
                src={picSrc} 
                alt="Default" 
                onClick={handleImageUpload}
            />
            <form className="ContactForm" onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='First Name'
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <input 
                    type='tel'
                    placeholder='Phone Number'
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
                <input 
                    type='email'
                    placeholder='E-Mail'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='Address'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <input type='submit' />
            </form>
        </div>
    )
}

export default ContactForm;