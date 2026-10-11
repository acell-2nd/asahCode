import React from "react";
import ContactProfile from "./ContactProfile";
import ContactBody from "./ContactBody";
import DelateContact from "./DelateContact";
import Joi from "joi";
import validationProps from "../utils/validation";
const contactItemPropsSchema = Joi.object({
    nama: Joi.string().required(),
    imgUrl: Joi.string().uri({ relativeOnly: true }).required(),
    username: Joi.string().required(),
    delateContact: Joi.func().required(),
    id: Joi.number().required()
});
function ContactItem(props) {
    const { nama, imgUrl, username, delateContact, id } = validationProps(contactItemPropsSchema, props, "ContactItem");
    return (
        <div className="contact__Item">
          <ContactProfile nama={nama} imgUrl={imgUrl} />
          <ContactBody nama={nama} username={username} />
            <DelateContact delateContact={delateContact} id={id}/>

        </div>
    )
}

export default ContactItem;