import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const contactData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: contactData,
  filter: '',
};

export const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров (ф-ии, кот. обрабатывают екшн)
  reducers: {
    addContact(state, action) {
      const contact = action.payload;
      if (
        state.contacts.filter(
          element => element.name.toLowerCase() === contact.name.toLowerCase()
        ).length > 0
      ) {
        return Notiflix.Notify.warning(
          `${contact.name} is already in contacts`
        );
      }
      state.contacts = [...state.contacts, contact];
    },
    deleteContact(state, action) {
      const id = action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
