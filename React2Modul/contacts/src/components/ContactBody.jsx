import React from "react";
import PropTypes from "prop-types";
function ContactBody({ nama, username }) {
    return (
        <div className="body__Profile">
            <h3>{nama}</h3>
            <p>{username}</p>
        </div>
    )
}

ContactBody.propTypes = {
    nama: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}
export default ContactBody;