import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { AddContactsFormContainer, AddContactsInput, Button } from './Styled';
import { useState } from 'react';

export const ContactsForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    }
    if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    addContact(contact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const nameInputId = nanoid();

  return (
    <AddContactsFormContainer onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <AddContactsInput
        type="text"
        name="name"
        id={nameInputId}
        onChange={handleChange}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="number">Number</label>
      <AddContactsInput
        type="tel"
        name="number"
        id="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </AddContactsFormContainer>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
