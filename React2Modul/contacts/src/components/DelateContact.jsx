import React from "react";
import PropTypes from "prop-types";
function DelateContact({ delateContact, id }) {
    return (
        <div className="delate__Contact">
            <button onClick={() => delateContact(id)}>X</button>
        </div>
    )
}
DelateContact.propTypes = {
    delateContact: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}
export default DelateContact;