import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, setFilter } from '../redux/contactsSlice/contactsSlice';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(state => state.contactsData.contacts);
  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const setFilterContacts = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
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
      <ContactsForm></ContactsForm>
      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={setFilterContacts} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      ></ContactsList>
    </div>
  );
};
