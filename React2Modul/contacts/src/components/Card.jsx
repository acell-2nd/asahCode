import React from "react";
import ContactList from "./ContactList";
import contact from "../utils/data.js";
import InputContac from "./InputContac.jsx";
import Navbar from "./Navbar.jsx";
import { Route, Routes } from "react-router-dom";
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contact(),
        };
        this.onDelateContact = this.onDelateContact.bind(this);
        this.onAddContact = this.onAddContact.bind(this);
    }
    onDelateContact = (id) => {
        const newContact = this.state.contacts.filter((contact) => contact.id !== id);
        this.setState({ contacts: newContact });
    }
    onAddContact = ({nama, username}) => {
        this.setState((prevState) => {
           return { contacts: [...prevState.contacts, {
                id: +new Date(),
                nama,
                username,
                imgUrl: "/images/default.jpg"
            }] }
        });
    }
    render() {
        return (
            <div className="card__Container">
                <h1>Contact Form</h1>
                <Navbar />
                <Routes>
                    <Route path="/add" element={<InputContac addContactHandler={this.onAddContact} />} />
                    <Route path="/" element={<ContactList contacts={this.state.contacts} delateContact={this.onDelateContact} />} />
                </Routes>
                
            </div>
        )
    }
      }
export default Card;
