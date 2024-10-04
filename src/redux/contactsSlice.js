import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: {
      items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        { id: "id-5", name: "Liam Johnson", number: "315-21-78" },
        { id: "id-6", name: "Olivia Brown", number: "482-94-66" },
        { id: "id-7", name: "Noah Williams", number: "531-34-85" },
        { id: "id-8", name: "Emma Jones", number: "678-42-56" },
        { id: "id-9", name: "Ava Garcia", number: "744-23-15" },
        { id: "id-10", name: "Mason Rodriguez", number: "219-56-32" },
        { id: "id-11", name: "Sophia Martinez", number: "555-68-99" },
        { id: "id-12", name: "Isabella Davis", number: "731-52-84" },
        { id: "id-13", name: "James Miller", number: "902-44-12" },
        { id: "id-14", name: "Benjamin Wilson", number: "657-38-44" },
        { id: "id-15", name: "Lucas Moore", number: "498-32-91" },
      ],
    },
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts.items = state.contacts.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
