import { createSlice } from '@reduxjs/toolkit';

const getContacts = () => {
    const savedContacts = localStorage.getItem('saved-contacts');
    if (savedContacts !== null) {
        console.log("JSON - ", JSON.parse(savedContacts));
        return JSON.parse(savedContacts);
    } else {
        return [];
    }
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: getContacts(),
    },
    reducers: {
        changeContacts(state, action) {
            state.contacts = action.payload;
        },
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContact(state, action) {
            console.log("deleteContact")
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { changeContacts, addContact, deleteContact } = contactsSlice.actions;