import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/contactsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookPersistConfig = {
  key: 'item',
  storage: storage,
  whitelist: ['contacts'],
};

const phonebookPersistReducer = persistReducer(
  phonebookPersistConfig,
  contactsReducer
);

const store = configureStore({
  reducer: { contactsData: phonebookPersistReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
