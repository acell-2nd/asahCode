import React from "react";
import Joi from "joi";
import validationProps from "../utils/validation";
const contactBodyPropsSchema = Joi.object({
    nama: Joi.string().required(),
    username: Joi.string().required()
});

function ContactBody(props) {
    const { nama, username } = validationProps(contactBodyPropsSchema, props, "ContactBody");
    return (
        <div className="body__Profile">
            <h3>{nama}</h3>
            <p>{username}</p>
        </div>
    )
}


export default ContactBody;