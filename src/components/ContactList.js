import ContactItem from "./ContactItem";

const ContactList = ({contacts}) => {

    return (
        <div>
            {
                contacts.map((contactData, index) =>
                    <ContactItem
                        key={contactData.phoneNumber}
                        phoneNumber={contactData.phoneNumber}
                        firstName={contactData.firstName}
                        lastName={contactData.lastName}
                        profileImg={contactData.profileImg}
                    />
                )
            }
        </div>
    )
}

export default ContactList;