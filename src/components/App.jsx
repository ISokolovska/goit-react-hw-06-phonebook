import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { store } from 'redux/store';

export const App = () => {
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  const [filter, setFilter] = useState('');

  // const getContacts = () => {
  //   if (JSON.parse(localStorage.getItem('contacts'))) {
  //     setContacts(JSON.parse(localStorage.getItem('contacts')));
  //   }
  // };

  // useEffect(() => {
  //   getContacts();
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const allContacts = useSelector(state => state.contactsData.contacts);

  const addContact = contact => {
    if (
      allContacts.filter(
        element => element.name.toLowerCase() === contact.name.toLowerCase()
      ).length > 0
    ) {
      return Notiflix.Notify.warning(`${contact.name} is already in contacts`);
    }
    // setContacts(prevState => {
    //   const arr = [...prevState, contact];
    //   return arr;
    // });
  };

  const setFilterContacts = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContacts = () => {
    const filteredContacts = allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const deleteContact = id => {
    // setContacts(prevState => {
    //   const deletedContacts = prevState.filter(contact => contact.id !== id);
    //   return deletedContacts;
    // });
  };

  const filteredContacts = filterContacts();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactsForm addContact={addContact}></ContactsForm>
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilterContacts} />
      <ContactsList
        contacts={filteredContacts}
        deleteContact={deleteContact}
      ></ContactsList>
    </div>
  );
};
