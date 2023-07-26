import React, { Component } from 'react'

export class AddContact extends Component {
    state = {
        name: "",
        email: ""
    };
    addContact = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert("Please add name and email");
            return;
        }
        console.log("Contact detail added");
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form class='ui form' widths='equal' onSubmit={this.addContact}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }}></input>
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
                    </div>
                    <button className='ui button'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact