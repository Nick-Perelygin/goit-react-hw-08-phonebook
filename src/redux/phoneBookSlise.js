import {createSlice} from '@reduxjs/toolkit'
import {fetchContacts, addContact, deleteContact} from './contactOperation'

const handlePending = state => {
    state.isLoading = true;
  };
  
const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = [action.payload, ...state.items];
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload.id)
        },
        [deleteContact.rejected]: handleRejected,
    },     
})
  
export const contactsReducer = phoneBookSlice.reducer