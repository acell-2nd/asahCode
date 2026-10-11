import React from "react";
import Joi from "joi";
import validationProps from "../utils/validation";
const contacInputPropsSchema = Joi.object(
    {
        addContactHandler : Joi.func().required()
    }
)
class InputContac extends React.Component {
    constructor(props) {
        super(props);
        const validateProps = validationProps(contacInputPropsSchema, props, "InputContact");

        this.state = {
            nama: "",
            username: "",
            validateProps
        };
        this.onNameChangeEv = this.onNameChangeEv.bind(this);
        this.onUsernameChangeEv = this.onUsernameChangeEv.bind(this);
        this.onSubmitEv = this.onSubmitEv.bind(this);
    }
    onNameChangeEv = (event) => {
        this.setState({ nama: event.target.value });
    }
    onUsernameChangeEv = (event) => {
        this.setState({ username: event.target.value });
    }
    onSubmitEv = (event) => {
        event.preventDefault();
    const {addContactHandler} = this.state.validateProps;
    addContactHandler(this.state);
    }
    render() {
        return(
            <div className="input__Contact">
                <form className="contact__Input" onSubmit={this.onSubmitEv}>
                    <input type="text" placeholder="Nama" id="nama" value={this.state.nama} onChange={this.onNameChangeEv} />
                    <input type="text" placeholder="Username" id="username" value={this.state.username} onChange={this.onUsernameChangeEv} />
                    <button type="submit">Add Contact</button>
                </form>
            </div>
        )
}
}



export default InputContac;