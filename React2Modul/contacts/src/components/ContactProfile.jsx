import React from "react";
import PropTypes from "prop-types";
function ContactProfile({ nama, imgUrl }) {
    return (
        <div className="img__Profile">
            <img src={imgUrl} alt={nama} />
        </div>
    )
}
ContactProfile.propTypes = {
    nama: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}
export default ContactProfile;