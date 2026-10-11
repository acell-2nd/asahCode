import React from "react";
import Joi from "joi";
import validationProps from "../utils/validation";
const contactProfilePropsSchema = Joi.object({
    nama: Joi.string().required(),
    imgUrl: Joi.string().uri({ relativeOnly: true }).required()
});
function ContactProfile(props) {
    const { nama, imgUrl } = validationProps(contactProfilePropsSchema, props, "ContactProfile");
    return (
        <div className="img__Profile">
            <img src={imgUrl} alt={nama} />
        </div>
    )
}

export default ContactProfile;