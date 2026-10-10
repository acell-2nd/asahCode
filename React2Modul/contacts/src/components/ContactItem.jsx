import React from "react";
import ContactProfile from "./ContactProfile";
import ContactBody from "./ContactBody";
import DelateContact from "./DelateContact";
import PropTypes from "prop-types";
function ContactItem({ nama, imgUrl, username ,delateContact, id}) {
    return (
        <div className="contact__Item">
          <ContactProfile nama={nama} imgUrl={imgUrl} />
          <ContactBody nama={nama} username={username} />
            <DelateContact delateContact={delateContact} id={id}/>

        </div>
    )
}
ContactItem.propTypes = {
    nama: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    delateContact: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}
export default ContactItem;