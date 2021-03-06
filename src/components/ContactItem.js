import '../css/ContactItem.css'

const ContactItem = ({firstName, lastName, phoneNumber, profileImg, deleteContact, handleClick}) => {
    return (
        <div className='contactItem' onClick={handleClick}>
            <img src={profileImg} alt='Profile' className='contactItemPicture'/>
            <div className='contactItemInfo'>
                <p>{firstName+" "+lastName}</p>
                <p>{phoneNumber}</p>
            </div>
            <div className='contactItemClose'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    className="bi bi-x-circle-fill" 
                    viewBox="0 0 16 16"
                    onClick={deleteContact}
                >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
            </div>
        </div>
    )
};

export default ContactItem;