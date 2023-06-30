import { configureStore } from '@reduxjs/toolkit'
import {contactsReducer} from './phoneBookSlise'
import {filterReducer} from './filterSlise'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
})