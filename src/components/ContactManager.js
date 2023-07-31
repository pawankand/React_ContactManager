import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';

function ContactManager() {

    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    );

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, { id: uuid(), ...contact }]);
        console.log("test");
    }

    const removeContactHandler = (id) => {
        const updatedContactList = contacts.filter((contact) => {
            return contact.id !== id;
        })
        setContacts(updatedContactList);
    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) {
            setContacts(retrieveContacts);
        }
    }, [])

    return (
        <div className='ui container'>
            <Header></Header>
            <AddContact addContactHandler={addContactHandler} ></AddContact>
            <ContactList contacts={contacts} getContactId={removeContactHandler}></ContactList>
        </div>
    )
}

export default ContactManager