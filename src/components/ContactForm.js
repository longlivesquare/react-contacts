import { useState } from 'react';
import './ContactForm.css';

const ContactForm = (props) => {
    const [picSrc, setPictureSource] = useState('default-image.png');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

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

    return (
        <>
            <div id="picture">
                <img 
                    src={picSrc} 
                    alt="Default" 
                    onClick={handleImageUpload}
                    />
            </div>
            <div id="form">
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
            </div>
        </>
    )
}

export default ContactForm;