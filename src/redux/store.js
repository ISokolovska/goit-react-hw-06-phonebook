import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { taskReducer } from './reducer';

const contactsData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? contactsData,
  filter: '',
};

export const contactsSlice = createSlice({
  // Имя слайса
  name: 'contacts',
  // Начальное состояние редюсера слайса
  initialState: initialState,
  // Объект редюсеров (ф-ииб котю обрабатывают екшн)
  reducers: {
    addContact(state, action) {},
    deleteContact(state, action) {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;
export const store = configureStore({
  reducer: { contactsData: contactsReducer },
});
