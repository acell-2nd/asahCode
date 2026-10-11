import React from "react";
import ContactItem from "./ContactItem";
import Joi from "joi";
import validationProps from "../utils/validation";
const contactListPropsSchema = Joi.object({
    contacts: Joi.array().items(
        Joi.object({
            id: Joi.number().required(),
            nama: Joi.string().required(),
            username: Joi.string().required(),
            imgUrl: Joi.string().uri({ relativeOnly: true }).required()
        })
    ).required(),
    delateContact: Joi.func().required()
});
function ContactList(props) {
    const { contacts, delateContact } = validationProps(contactListPropsSchema, props, "ContactList");
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




export default ContactList;