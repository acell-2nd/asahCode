import React from "react";
import ContactItem from "./ContactItem";

function ContactList({contacts, delateContact}) {
return (
    <div className="contact__List">
        {contacts.map((item, index) => (
                <ContactItem
                    key={index} 
                    {...item} 
                    id={item.id}
                    delateContact={delateContact}
                    />

            ))} 
    </div>
)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            nama: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
        })
    ).isRequired,
    delateContact: PropTypes.func.isRequired
};

export default ContactList;