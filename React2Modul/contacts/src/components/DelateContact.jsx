import React from "react";
import PropTypes from "prop-types";
import Joi from "joi";
import validationProps from "../utils/validation";
const delateContactPropsSchema = Joi.object({
    delateContact: Joi.func().required(),
    id: Joi.number().required()
});
function DelateContact(props) {
    const { delateContact, id } = validationProps(delateContactPropsSchema, props, "DelateContact");
    
    return (
        <div className="delate__Contact">
            <button onClick={() => delateContact(id)}>X</button>
        </div>
    )
}

export default DelateContact;